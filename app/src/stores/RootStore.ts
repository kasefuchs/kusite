import { CompositeStore } from "@kusite/store";
import { observable } from "mobx";
import { WindowManagerStore } from "@kusite/window-manager";

export default class RootStore extends CompositeStore {
  @observable
  public accessor windowManager = new WindowManagerStore();

  protected override stores = [];

  public constructor() {
    super("root");
  }
}
