import { Component, type ComponentChildren } from "preact";
import { BrowserRouter } from "react-router";
import { Main } from "./pages/Main";
import { I18nProvider } from "./providers/I18nProvider";

export default class extends Component {
  public override render(): ComponentChildren {
    return (
      <I18nProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </I18nProvider>
    );
  }
}
