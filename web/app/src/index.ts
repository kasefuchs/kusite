import { createElement, render } from "preact";
import { default as Application } from "./Application";
import "./styles/index.scss";

const container = document.getElementById("root");

if (container) {
  const node = createElement(Application, {});

  render(node, container);
}
