import I18nProvider from "#providers/I18nProvider";
import StoreProvider from "#providers/StoreProvider";
import { Router } from "wouter";
import type { Props } from "./types";

export default function ApplicationProvider(props: Props) {
  return (
    <I18nProvider>
      <StoreProvider>
        <Router base={import.meta.env.BASE_URL}>{props.children}</Router>
      </StoreProvider>
    </I18nProvider>
  );
}
