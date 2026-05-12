import { CompositeSerializableStore } from "@kusite/store";

export default class RootStore extends CompositeSerializableStore {
  protected override stores = [];

  public constructor() {
    super("root");
  }
}
