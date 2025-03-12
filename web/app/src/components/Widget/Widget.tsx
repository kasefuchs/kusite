import { Component, type ComponentChildren } from "preact";
import type { WidgetProps } from "./types";
import style from "./Widget.module.scss";
import { Container } from "../Container";

export default class Widget extends Component<WidgetProps> {
  public override render(props: WidgetProps): ComponentChildren {
    return (
      <div className={style["widget"]}>
        <span className={style["title"]} children={props.title} />
        <Container>
          <div className={style["content"]} children={props.children} />
        </Container>
      </div>
    );
  }
}
