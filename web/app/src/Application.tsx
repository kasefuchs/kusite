import Main from "#pages/Root";
import I18nProvider from "#providers/I18nProvider";
import StoreProvider from "#providers/StoreProvider";
import { Component, type ComponentChildren } from "preact";

export default class Application extends Component {
  public override render(): ComponentChildren {
    return (
      <I18nProvider>
        <StoreProvider>
          <Main />
        </StoreProvider>
      </I18nProvider>
    );
  }
}
