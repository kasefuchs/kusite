import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ks-app")
export default class App extends LitElement {
  public static override readonly styles = css`
    .content {
      display: flex;
      min-height: 100vh;
      line-height: 1.1;
      text-align: center;
      flex-direction: column;
      justify-content: center;
    }

    .content h1 {
      font-size: 3.6rem;
      font-weight: 700;
    }
  `;

  public override render() {
    return html`
      <div class="content">
        <h1>Rsbuild with Lit</h1>
      </div>
    `;
  }
}
