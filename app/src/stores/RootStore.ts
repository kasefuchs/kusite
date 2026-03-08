import { CompositeSerializableStore } from "@kusite/store";
import { observable } from "mobx";
import { WindowManagerStore } from "@kusite/window-manager";

export default class RootStore extends CompositeSerializableStore {
  @observable
  public accessor windowManager = new WindowManagerStore();

  protected override stores = [];

  public constructor() {
    super("root");
  }
}
