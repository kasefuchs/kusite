import { Component, type ComponentChildren } from "preact";
import type { ContainerProps } from "./types";
import style from "./Container.module.scss";

export default class Container extends Component<ContainerProps> {
  public override render(props: ContainerProps): ComponentChildren {
    return <div children={props.children} className={style["container"]} />;
  }
}
