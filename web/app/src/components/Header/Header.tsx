import { Component, type ComponentChild } from "preact";
import type { HeaderProps } from "./types.d.ts";
import { Container } from "../Container";
import style from "./Header.module.scss";

export default class Header extends Component<HeaderProps> {
  public override render(props: HeaderProps): ComponentChild {
    return (
      <Container>
        <header className={style["header"]}>
          <img className={style["icon"]} src={props.icon} />
          <div className={style["content"]} children={props.children} />
        </header>
      </Container>
    );
  }
}
