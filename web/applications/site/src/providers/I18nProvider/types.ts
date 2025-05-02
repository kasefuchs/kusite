import type { ComponentChildren } from "preact";
import type I18nProvider from "./I18nProvider";

export interface Props {
  children: ComponentChildren;
}

export interface State {
  initialized: boolean;
}

export type ProviderType = typeof I18nProvider;
export type Language = ProviderType["supportedLanguages"][number];
export type Namespace = ProviderType["namespaces"][number];
