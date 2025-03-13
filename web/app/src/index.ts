import "preact/debug";
import "./styles/index.scss";

import { createElement, render } from "preact";
import { Application } from "./pages/Application";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
