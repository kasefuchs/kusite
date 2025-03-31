import classNames from "classnames";
import { Component, type ComponentChild } from "preact";
import { Container } from "../Container";
import style from "./Footer.module.scss";
import type { Props } from "./types";

export default class extends Component<Props> {
  public override render(props: Props): ComponentChild {
    const className = classNames(style["footerContainer"], props.className);

    return <Container {...props} className={className} />;
  }
}
