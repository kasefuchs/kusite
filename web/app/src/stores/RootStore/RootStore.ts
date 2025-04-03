import IPersistentStore from "#interfaces/stores/IPersistentStore";
import IStore from "#interfaces/stores/IStore";
import I18nStore from "#stores/I18nStore";
import stringify from "json-stringify-deterministic";
import localforage from "localforage";
import { IReactionDisposer, observable, reaction } from "mobx";

export default class RootStore implements IStore {
  private readonly storage = localforage.createInstance({ name: this.id });

  @observable
  public accessor i18n: I18nStore = new I18nStore();

  private readonly persistentStores: IPersistentStore[] = [this.i18n];

  public get id(): string {
    return "root" as const;
  }

  public async loadStorageData(): Promise<void> {
    for (const store of this.persistentStores) {
      const data = await this.storage.getItem(store.id);
      if (data !== null) store.restore(data);
    }
  }

  public registerPersistenceListeners(): IReactionDisposer[] {
    return this.persistentStores.map((store) =>
      reaction(
        () => stringify(store.dump()),
        async (serialized) =>
          await this.storage.setItem(store.id, JSON.parse(serialized)),
      ),
    );
  }
}
