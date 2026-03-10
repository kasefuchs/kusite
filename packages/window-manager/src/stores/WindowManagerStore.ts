import mergeWith from "lodash.mergewith";
import { ulid } from "ulid";
import { action, computed, observable, type ObservableMap } from "mobx";
import type { IStore } from "@kusite/store";
import type { IWindowDescriptor, WindowPosition, WindowSize } from "@/types";
import type { ComponentChild } from "preact";
import type { DeepPartial } from "ts-essentials";
import WindowInstanceStore from "@/stores/WindowInstanceStore";

export default class WindowManagerStore implements IStore {
  @observable
  public accessor instances: ObservableMap<string, WindowInstanceStore> = observable.map();

  @computed
  public get maxZIndex(): number {
    const zIndices = this.instances
      .values()
      .map(({ transform }) => transform.zIndex)
      .toArray();

    return zIndices.length ? Math.max(...zIndices) : 100;
  }

  @action
  public addWindow(component: ComponentChild, options?: DeepPartial<IWindowDescriptor>): WindowInstanceStore {
    const base: IWindowDescriptor = {
      handles: {
        dragClassName: "window-drag-handle",
        resizeDirections: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
      },
      transform: {
        position: [128, 128],
        size: [480, 320],
        zIndex: this.maxZIndex + 1,
      },
      constraints: {},
    };

    const merged = mergeWith(base, options, (_: any, source): any => {
      if (Array.isArray(source)) return source;
    });

    const id = ulid();
    const instance = new WindowInstanceStore(id, this, component, merged);
    this.instances.set(id, instance);
    return instance;
  }

  @action
  public closeWindow(id: string): boolean {
    return this.instances.delete(id);
  }

  @action
  public updateWindowPosition(id: string, position: WindowPosition): void {
    this.instances.get(id)?.updatePosition(position);
  }

  @action
  public updateWindowSize(id: string, size: WindowSize): void {
    this.instances.get(id)?.updateSize(size);
  }

  @action
  public focusWindow(id: string): number {
    return this.instances.get(id)?.focus() ?? -1;
  }
}
