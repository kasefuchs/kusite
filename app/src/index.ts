import "@/App.ts";
import { html, render } from "lit";

const container = document.getElementById("root");

if (container) render(html`<ks-app />`, container);
