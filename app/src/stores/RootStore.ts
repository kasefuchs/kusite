import { CompositeStore } from "@kusite/store";

export default class RootStore extends CompositeStore {
  protected override stores = [];

  public constructor() {
    super("RootStore");
  }
}
