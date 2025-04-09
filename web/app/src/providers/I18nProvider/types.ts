import type { ComponentChildren } from "preact";
import type { default as I18nProvider } from "./I18nProvider";

export interface Props {
  children: ComponentChildren;
}

export interface State {
  initialized: boolean;
}

export type Language = (typeof I18nProvider)["supportedLanguages"][number];
