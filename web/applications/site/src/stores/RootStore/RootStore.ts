import I18nStore from "#/stores/I18nStore";
import PersistentRootStore from "@kusite/stores";
import { observable } from "mobx";

export default class RootStore extends PersistentRootStore {
  @observable
  public accessor i18n = new I18nStore();

  protected override readonly persistentStores = [this.i18n];

  public constructor() {
    super(import.meta.env.PACKAGE_NAME);
  }
}
