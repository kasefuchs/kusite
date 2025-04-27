if (import.meta.env.DEV) await import("preact/debug");

import "#styles/index.scss";
import { createElement, render } from "preact";
import { default as Application } from "./Application";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
