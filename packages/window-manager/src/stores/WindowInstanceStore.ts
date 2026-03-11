import { action, computed, observable } from "mobx";
import type { IStore } from "@kusite/store";
import type { IWindowDescriptor, WindowPosition, WindowSize } from "@/types";
import type { WindowManagerStore } from "@/stores";
import type { ComponentChild } from "preact";

export default class WindowInstanceStore implements IStore {
  public readonly id: string;
  public readonly manager: WindowManagerStore;
  public readonly children: ComponentChild;

  @observable
  public accessor descriptor: IWindowDescriptor;

  public constructor(id: string, manager: WindowManagerStore, children: ComponentChild, descriptor: IWindowDescriptor) {
    this.id = id;
    this.manager = manager;
    this.children = children;
    this.descriptor = descriptor;
  }

  @computed
  public get isFocused(): boolean {
    return this.descriptor.transform.zIndex === this.manager.maxZIndex;
  }

  @action
  public close(): void {
    this.manager.closeWindow(this.id);
  }

  @action
  public focus(): number {
    if (!this.isFocused) {
      return (this.descriptor.transform.zIndex = this.manager.maxZIndex + 1);
    }

    return this.descriptor.transform.zIndex;
  }

  @action
  public updatePosition(position: WindowPosition): void {
    this.descriptor.transform.position = position;
  }

  @action
  public updateSize(size: WindowSize): void {
    this.descriptor.transform.size = size;
  }
}
