import i18next, { type BackendModule, type LanguageDetectorModule } from 'i18next'
import { Component, type ComponentChildren } from 'preact'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import type { Language, Namespace, Props, State } from './types'

export default class I18nProvider extends Component<Props, State> {
  public static readonly namespaces = ['page'] as const
  public static readonly supportedLanguages = ['en', 'ru'] as const
  public static readonly fallbackLanguage: Language = 'en'

  private static readonly backendModule: BackendModule = {
    type: 'backend',
    init: () => {
      // Do nothing.
    },
    read: async (language: Language, namespace: Namespace) => {
      const module = await import(`@/assets/locales/${language}/${namespace}.yml`)
      return module.default
    },
  }

  private static readonly languageDetectorModule: LanguageDetectorModule = {
    type: 'languageDetector',
    detect: () => Array.from(navigator.languages),
  }

  public override readonly state: Readonly<State> = { initialized: false }

  public override async componentDidMount(): Promise<void> {
    try {
      await i18next
        .use(initReactI18next)
        .use(I18nProvider.backendModule)
        .use(I18nProvider.languageDetectorModule)
        .init(
          {
            ns: I18nProvider.namespaces,
            load: 'languageOnly',
            fallbackLng: I18nProvider.fallbackLanguage,
            supportedLngs: I18nProvider.supportedLanguages,
            interpolation: { escapeValue: false },
            nonExplicitSupportedLngs: true,
          },
          (error) => {
            if (!error) return
            if (error instanceof Array) {
              error.forEach(console.error)
            } else {
              console.error(error)
            }
          },
        )
    } finally {
      this.setState({ initialized: true })
    }
  }

  public override render(): ComponentChildren {
    return this.state.initialized && <I18nextProvider i18n={i18next} children={this.props.children} />
  }
}
