import type { default as I18nProvider } from "#providers/I18nProvider/I18nProvider";
import type { ComponentChildren } from "preact";

export interface Props {
  children: ComponentChildren;
}

export interface State {
  initialized: boolean;
}

export type Language = (typeof I18nProvider)["supportedLanguages"][number];
export type Namespace = (typeof I18nProvider)["namespaces"][number];
