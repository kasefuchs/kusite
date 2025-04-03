import type IPersistentStore from "#interfaces/stores/IPersistentStore";
import I18nProvider from "#providers/I18nProvider";
import i18next from "i18next";
import { action, observable } from "mobx";
import type { Data } from "./types";

export default class I18nStore implements IPersistentStore<Data> {
  private static readonly supportedLanguagesCount: number =
    I18nProvider.supportedLanguages.length;

  @observable
  public accessor language: string = i18next.language;

  public get id(): string {
    return "i18n" as const;
  }

  public dump(): Data {
    return { language: this.language };
  }

  @action
  public restore(data: Data): void {
    this.language = data.language;
  }

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
