import type { IPersistentStore, IStore } from '#/types'
import stringify from 'json-stringify-deterministic'
import localForage from 'localforage'
import { reaction, type IReactionDisposer } from 'mobx'

export default abstract class RootStore implements IStore {
  protected abstract persistentStores: IPersistentStore[]

  protected constructor(
    public readonly id: string,
    private readonly storage: typeof localForage = localForage.createInstance({ name: id }),
  ) {}

  public setupPersistence(): IReactionDisposer[] {
    return this.persistentStores.map((store) =>
      reaction(
        () => stringify(store.dump()),
        async (serialized) => this.storage.setItem(store.id, JSON.parse(serialized)),
        { name: `RootStorePersistenceReaction(${this.id}:${store.id})` },
      ),
    )
  }

  public async restoreFromStorage(): Promise<void> {
    for (const store of this.persistentStores) {
      const data = await this.storage.getItem(store.id)
      if (data) await store.restore(data)
    }
  }
}
