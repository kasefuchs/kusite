import { Component, type ComponentChildren } from "preact";
import type { ContainerProps } from "./types";
import classNames from "classnames";
import style from "./Container.module.scss";

export default class Container extends Component<ContainerProps> {
  public override render(props: ContainerProps): ComponentChildren {
    const className = classNames(style["container"], props.className);

    return <div {...props} className={className} />;
  }
}
