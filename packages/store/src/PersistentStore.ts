import stringify from "json-stringify-deterministic";
import localspace, { type LocalSpaceInstance } from "localspace";
import { reaction, type IReactionDisposer } from "mobx";
import type { ISerializableStore } from "@/types";

export default class PersistentStore {
  public constructor(
    public readonly store: ISerializableStore,
    private readonly storage: LocalSpaceInstance = localspace,
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
