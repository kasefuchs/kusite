import { Component, type ComponentChildren } from "preact";
import { Container } from "../Container";
import type { Props } from "./types";
import style from "./Widget.module.scss";

export default class extends Component<Props> {
  public override render(props: Props): ComponentChildren {
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
