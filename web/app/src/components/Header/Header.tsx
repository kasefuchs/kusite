import { Component, type ComponentChild } from "preact";
import type { HeaderProps } from "./types";
import { Container } from "../Container";
import style from "./Header.module.scss";

export default class Header extends Component<HeaderProps> {
  public override render(props: HeaderProps): ComponentChild {
    return (
      <Container className={style["headerContainer"]}>
        <img className={style["headerIcon"]} src={props.icon} />
        <div className={style["headerContent"]} children={props.children} />
      </Container>
    );
  }
}
