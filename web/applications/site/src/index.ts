import "#/styles/index.scss";
import "@kusite/components/index.css";

import Application from "#/Application";
import { createElement, render } from "preact";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
