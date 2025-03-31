import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { Component, type ComponentChildren } from "preact";
import { I18nextProvider, initReactI18next } from "react-i18next";
import type { Props, State } from "./types";

export default class extends Component<Props, State> {
  public override readonly state: Readonly<State> = {
    initialized: false,
  };

  public override async componentDidMount(): Promise<void> {
    try {
      await i18next
        .use(initReactI18next)
        .use(
          resourcesToBackend(
            (language: string, namespace: string) =>
              import(`../../assets/locales/${language}/${namespace}.yml`),
          ),
        )
        .init(
          {
            ns: ["page"],
            lng: "en",
            fallbackLng: "en",
            interpolation: {
              escapeValue: false,
            },
          },
          (error) => {
            if (error) {
              console.error(error);
            }
          },
        );
    } finally {
      this.setState({
        initialized: true,
      });
    }
  }

  public override render(props: Props, state: State): ComponentChildren {
    return state.initialized ? (
      <I18nextProvider i18n={i18next} children={props.children} />
    ) : undefined;
  }
}
