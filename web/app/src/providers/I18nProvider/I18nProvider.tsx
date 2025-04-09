import i18next, { LanguageDetectorModule, type BackendModule } from "i18next";
import { Component, type ComponentChildren } from "preact";
import { I18nextProvider, initReactI18next } from "react-i18next";
import type { Language, Props, State } from "./types";

export default class I18nProvider extends Component<Props, State> {
  public static readonly supportedLanguages = ["en", "ru"] as const;
  public static readonly fallbackLanguage: Language = "en";

  public override readonly state: Readonly<State> = { initialized: false };

  private static readonly backendModule: BackendModule = {
    type: "backend",
    init: () => {},
    read: async (language: string, namespace: string) => {
      const module = await import(`#assets/locales/${language}/${namespace}.yml`);
      return module.default;
    },
  };

  private static readonly languageDetectorModule: LanguageDetectorModule = {
    type: "languageDetector",
    detect: (): readonly string[] => Array.from(navigator.languages),
  };

  public override async componentDidMount(): Promise<void> {
    try {
      await i18next
        .use(initReactI18next)
        .use(I18nProvider.languageDetectorModule)
        .use(I18nProvider.backendModule)
        .init(
          {
            ns: ["page"],
            fallbackLng: I18nProvider.fallbackLanguage,
            interpolation: { escapeValue: false },
            supportedLngs: I18nProvider.supportedLanguages,
            nonExplicitSupportedLngs: true,
          },
          (error) => {
            if (!error) return;
            if (error instanceof Array) {
              for (const err in error) console.error(err);
            } else {
              console.error(error);
            }
          },
        );
    } finally {
      this.setState({ initialized: true });
    }
  }

  public override render(): ComponentChildren {
    return this.state.initialized ? <I18nextProvider i18n={i18next} children={this.props.children} /> : undefined;
  }
}
