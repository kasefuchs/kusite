import "@/Application.ts";
import { html, render } from "lit";

const container = document.getElementById("root");

if (container) {
  render(html`<application-root />`, document.body);
}
