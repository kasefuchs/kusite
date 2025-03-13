import { Component, type ComponentChildren } from "preact";
import type { WidgetProps } from "./types";
import style from "./Widget.module.scss";
import { Container } from "../Container";

export default class Widget extends Component<WidgetProps> {
  public override render(props: WidgetProps): ComponentChildren {
    return (
      <div className={style["widgetContainer"]}>
        <span className={style["widgetTitle"]} children={props.title} />
        <Container
          className={style["widgetContent"]}
          children={props.children}
        />
      </div>
    );
  }
}
