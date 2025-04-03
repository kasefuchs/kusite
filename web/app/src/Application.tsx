import Main from "#pages/Main";
import I18nProvider from "#providers/I18nProvider";
import StoreProvider from "#providers/StoreProvider";
import { Component, type ComponentChildren } from "preact";
import { BrowserRouter } from "react-router";

export default class Application extends Component {
  public override render(): ComponentChildren {
    return (
      <I18nProvider>
        <StoreProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </StoreProvider>
      </I18nProvider>
    );
  }
}
