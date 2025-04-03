import I18nProvider from "#providers/I18nProvider";
import i18next from "i18next";
import { action, observable } from "mobx";

export default class I18nStore {
  private static readonly supportedLanguagesCount: number =
    I18nProvider.supportedLanguages.length;

  @observable
  public accessor language: string = i18next.language;

  @action
  public setLanguage(code: string): void {
    i18next.changeLanguage((this.language = code));
  }

  @action
  public nextLanguage(): void {
    const currentIndex = I18nProvider.supportedLanguages.indexOf(this.language);
    const nextIndex = (currentIndex + 1) % I18nStore.supportedLanguagesCount;

    this.setLanguage(I18nProvider.supportedLanguages[nextIndex]!);
  }
}
