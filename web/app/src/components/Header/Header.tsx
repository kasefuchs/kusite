import { Component, type ComponentChild } from "preact";
import { Container } from "../Container";
import style from "./Header.module.scss";
import type { Props } from "./types";

export default class extends Component<Props> {
  public override render(props: Props): ComponentChild {
    return (
      <Container className={style["headerContainer"]}>
        <img className={style["headerIcon"]} src={props.icon} />
        <div className={style["headerContent"]} children={props.children} />
      </Container>
    );
  }
}
