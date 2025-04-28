import "#styles/index.scss";
import "@kusite/components/index.css";
import { createElement, render } from "preact";
import { default as Application } from "./Application";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
