import merge from "lodash.merge";
import { ulid } from "ulid";
import { action, computed, observable, type ObservableMap } from "mobx";
import type { IStore } from "@kusite/store";
import type { IWindowDescriptor, WindowPosition, WindowSize } from "@/types";
import type { IAddWindowOptions } from "./types";

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
  public addWindow<D = undefined>({ children, ...options }: IAddWindowOptions<D>): IWindowDescriptor {
    const id = ulid();
    const base: IWindowDescriptor<D> = {
      id,
      children,
      transform: {
        position: [128, 128],
        size: [480, 320],
        zIndex: this.maxZIndex + 1,
      },
      constraints: {},
    };

    const merged = merge(base, options);
    const descriptor = observable.object(merged, {
      children: observable.ref,
    });

    this.descriptors.set(id, descriptor);
    return descriptor;
  }

  @action
  public closeWindow(id: string): boolean {
    return this.descriptors.delete(id);
  }

  @action
  public updateWindowPosition(id: string, position: WindowPosition): void {
    const descriptor = this.descriptors.get(id);
    if (descriptor) descriptor.transform.position = position;
  }

  @action
  public updateWindowSize(id: string, size: WindowSize): void {
    const descriptor = this.descriptors.get(id);
    if (descriptor) descriptor.transform.size = size;
  }

  @action
  public focusWindow(id: string): number {
    const descriptor = this.descriptors.get(id);
    if (descriptor && descriptor.transform.zIndex < this.maxZIndex) {
      return (descriptor.transform.zIndex = this.maxZIndex + 1);
    }

    return -1;
  }
}
