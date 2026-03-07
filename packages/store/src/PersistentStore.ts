import type { ISerializableStore } from "@/types";
import stringify from "json-stringify-deterministic";
import localForage from "localforage";
import { reaction, type IReactionDisposer } from "mobx";

export default class PersistentStore {
  public constructor(
    public readonly store: ISerializableStore,
    private readonly storage: typeof localForage,
  ) {}

  public setup(): IReactionDisposer {
    return reaction(
      () => stringify(this.store.serialize()),
      async (serialized) => this.storage.setItem(this.store.id, JSON.parse(serialized)),
      { name: `PersistentStoreReaction(${this.store.id})` },
    );
  }

  public async deserialize(): Promise<void> {
    const data = await this.storage.getItem(this.store.id);
    if (data) await this.store.deserialize(data);
  }
}
