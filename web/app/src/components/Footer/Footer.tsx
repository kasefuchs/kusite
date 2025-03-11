import { Component, type ComponentChild } from "preact";
import type { FooterProps } from "./types.d.ts";
import { Container } from "../Container";
import style from "./Footer.module.scss";

export default class Footer extends Component<FooterProps> {
  public override render(props: FooterProps): ComponentChild {
    return (
      <Container>
        <footer className={style["footer"]} children={props.children} />
      </Container>
    );
  }
}
