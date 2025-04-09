import I18nProvider from "#providers/I18nProvider";
import { Language } from "#providers/I18nProvider/types";
import type IPersistentStore from "#types/stores/IPersistentStore";
import i18next from "i18next";
import { action, observable } from "mobx";
import type { Data } from "./types";

export default class I18nStore implements IPersistentStore<Data> {
  private static readonly supportedLanguagesCount: number = I18nProvider.supportedLanguages.length;

  @observable
  public accessor language: Language = i18next.language as Language;

  public get id(): string {
    return "i18n" as const;
  }

  public dump(): Data {
    return { language: this.language };
  }

  @action
  public async restore(data: Data): Promise<void> {
    await this.setLanguage(data.language);
  }

  @action
  public async setLanguage(language: Language): Promise<void> {
    await i18next.changeLanguage((this.language = language));
  }

  @action
  public async nextLanguage(): Promise<void> {
    const currentIndex = I18nProvider.supportedLanguages.indexOf(this.language);
    const nextIndex = (currentIndex + 1) % I18nStore.supportedLanguagesCount;

    await this.setLanguage(I18nProvider.supportedLanguages[nextIndex]!);
  }
}
