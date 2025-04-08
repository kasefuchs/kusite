import I18nStore from "#stores/I18nStore";
import type IPersistentStore from "#types/stores/IPersistentStore";
import type IStore from "#types/stores/IStore";
import stringify from "json-stable-stringify";
import { IReactionDisposer, observable, reaction } from "mobx";

export default class RootStore implements IStore {
  @observable
  public accessor i18n = new I18nStore();

  private readonly persistentStores: IPersistentStore[] = [this.i18n];

  public get id(): string {
    return "root" as const;
  }

  public restoreStoresData(): void {
    for (const store of this.persistentStores) {
      const data = localStorage.getItem(store.id);
      if (data !== null) store.restore(data);
    }
  }

  public registerPersistenceReactions(): IReactionDisposer[] {
    return this.persistentStores.map((store) =>
      reaction(
        () => stringify(store.dump())!,
        (serialized) => localStorage.setItem(store.id, serialized),
      ),
    );
  }
}
