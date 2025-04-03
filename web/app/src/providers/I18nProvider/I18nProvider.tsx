import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { Component, type ComponentChildren } from "preact";
import { I18nextProvider, initReactI18next } from "react-i18next";
import type { Props, State } from "./types";

export default class I18nProvider extends Component<Props, State> {
  public static supportedLanguages: string[] = ["ru", "en"];

  public override readonly state: Readonly<State> = {
    initialized: false,
  };

  public override async componentDidMount(): Promise<void> {
    try {
      await i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .use(
          resourcesToBackend(
            (language: string, namespace: string) =>
              import(`#assets/locales/${language}/${namespace}.yml`),
          ),
        )
        .init(
          {
            ns: ["page"],
            fallbackLng: "en",
            interpolation: { escapeValue: false },
            supportedLngs: I18nProvider.supportedLanguages,
            nonExplicitSupportedLngs: true,
          },
          (error) => {
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
    return this.state.initialized ? (
      <I18nextProvider i18n={i18next} children={this.props.children} />
    ) : undefined;
  }
}
