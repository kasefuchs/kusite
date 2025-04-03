import I18nStore from "#stores/I18nStore";
import { observable } from "mobx";

export default class RootStore {
  @observable
  public accessor i18n: I18nStore = new I18nStore();
}
