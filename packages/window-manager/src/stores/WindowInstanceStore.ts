import { action, computed, observable } from "mobx";
import type { IStore } from "@kusite/store";
import type {
  IWindowConstraints,
  IWindowDescriptor,
  IWindowHandles,
  IWindowTransform,
  WindowPosition,
  WindowSize,
} from "@/types";
import type { WindowManagerStore } from "@/stores";
import type { ComponentChild } from "preact";

export default class WindowInstanceStore implements IStore {
  public readonly id: string;
  public readonly manager: WindowManagerStore;
  public readonly children: ComponentChild;

  @observable
  public accessor handles: IWindowHandles;

  @observable
  public accessor transform: IWindowTransform;

  @observable
  public accessor constraints: IWindowConstraints;

  public constructor(id: string, manager: WindowManagerStore, children: ComponentChild, descriptor: IWindowDescriptor) {
    this.id = id;
    this.children = children;
    this.manager = manager;
    this.handles = descriptor.handles;
    this.transform = descriptor.transform;
    this.constraints = descriptor.constraints;
  }

  @computed
  public get isFocused(): boolean {
    return this.transform.zIndex === this.manager.maxZIndex;
  }

  @action
  public close(): void {
    this.manager.closeWindow(this.id);
  }

  @action
  public focus(): number {
    if (!this.isFocused) {
      return (this.transform.zIndex = this.manager.maxZIndex + 1);
    }

    return this.transform.zIndex;
  }

  @action
  public updatePosition(position: WindowPosition): void {
    this.transform.position = position;
  }

  @action
  public updateSize(size: WindowSize): void {
    this.transform.size = size;
  }
}
