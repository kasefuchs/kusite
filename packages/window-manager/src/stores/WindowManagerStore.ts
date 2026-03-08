import type { IStore } from "@kusite/store";
import type { IWindowDescriptor } from "@/types";
import { action, computed, observable } from "mobx";
import type { ComponentType } from "preact";
import { ulid } from "ulid";

export default class WindowManagerStore implements IStore {
  public readonly id: string = "window-manager";

  @observable
  public accessor descriptors: Record<string, IWindowDescriptor> = {};

  @computed
  public get maxZIndex(): number {
    const zIndices = Object.values(this.descriptors).map(({ transform }) => transform.zIndex);

    return zIndices.length ? Math.max(...zIndices) : 100;
  }

  @action
  public addWindow<P, D>(Component: ComponentType<P>, props?: P, data?: D): IWindowDescriptor {
    const id = ulid();

    return (this.descriptors[id] = {
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
    });
  }

  @action
  public closeWindow(id: string): boolean {
    return delete this.descriptors[id];
  }

  @action
  public updateWindowPosition(id: string, x: number, y: number) {
    if (this.descriptors[id]) {
      this.descriptors[id].transform.x = x;
      this.descriptors[id].transform.y = y;
    }
  }

  @action
  public updateWindowSize(id: string, width: number, height: number) {
    if (this.descriptors[id]) {
      this.descriptors[id].transform.width = width;
      this.descriptors[id].transform.height = height;
    }
  }

  @action
  public focusWindow(id: string): number {
    if (this.descriptors[id] && this.descriptors[id].transform.zIndex < this.maxZIndex) {
      return (this.descriptors[id].transform.zIndex = this.maxZIndex + 1);
    }

    return -1;
  }
}
