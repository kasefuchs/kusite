import { Component, type ComponentChild } from "preact";
import type { FooterProps } from "./types";
import { Container } from "../Container";
import classNames from "classnames";
import style from "./Footer.module.scss";

export default class Footer extends Component<FooterProps> {
  public override render(props: FooterProps): ComponentChild {
    const className = classNames(style["footerContainer"], props.className);

    return <Container {...props} className={className} />;
  }
}
