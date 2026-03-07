import type { ISerializableStore } from "@/types";
import type { AsyncOrSync } from "ts-essentials";

type CompositeStoreState = Record<string, unknown>;

export default abstract class CompositeStore implements ISerializableStore<CompositeStoreState> {
  protected abstract stores: ISerializableStore[];

  protected constructor(public readonly id: string) {}

  serialize(): CompositeStoreState {
    const data: CompositeStoreState = {};
    for (const store of this.stores) {
      data[store.id] = store;
    }

    return data;
  }

  deserialize(data: CompositeStoreState): AsyncOrSync<void> {
    for (const store of this.stores) {
      const storeData = data[store.id];
      if (storeData) store.deserialize(storeData);
    }
  }
}
