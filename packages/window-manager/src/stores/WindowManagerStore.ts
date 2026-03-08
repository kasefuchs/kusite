import { ulid } from "ulid";
import { action, computed, observable, type ObservableMap } from "mobx";
import type { IStore } from "@kusite/store";
import type { IWindowDescriptor } from "@/types";
import type { ComponentType } from "preact";

export default class WindowManagerStore implements IStore {
  public readonly id: string = "window-manager";

  @observable
  public accessor descriptors: ObservableMap<string, IWindowDescriptor> = observable.map();

  @computed
  public get maxZIndex(): number {
    const zIndices = this.descriptors
      .values()
      .map(({ transform }) => transform.zIndex)
      .toArray();

    return zIndices.length ? Math.max(...zIndices) : 100;
  }

  @action
  public addWindow<P, D>(Component: ComponentType<P>, props?: P, data?: D): IWindowDescriptor {
    const id = ulid();
    const descriptor: IWindowDescriptor = {
      id,
      data,
      content: { Component, props },
      transform: {
        x: 128,
        y: 128,
        width: 480,
        height: 320,
        zIndex: this.maxZIndex + 1,
      },
    };

    this.descriptors.set(id, descriptor);
    return descriptor;
  }

  @action
  public closeWindow(id: string): boolean {
    return this.descriptors.delete(id);
  }

  @action
  public updateWindowPosition(id: string, x: number, y: number) {
    const descriptor = this.descriptors.get(id);
    if (descriptor) {
      descriptor.transform.x = x;
      descriptor.transform.y = y;
    }
  }

  @action
  public updateWindowSize(id: string, width: number, height: number) {
    const descriptor = this.descriptors.get(id);
    if (descriptor) {
      descriptor.transform.width = width;
      descriptor.transform.height = height;
    }
  }

  @action
  public focusWindow(id: string): number {
    const descriptor = this.descriptors.get(id);
    if (descriptor) return (descriptor.transform.zIndex = this.maxZIndex + 1);

    return -1;
  }
}
