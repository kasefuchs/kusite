import { createElement, render } from "preact";
import Application from "./pages/Application.tsx";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
