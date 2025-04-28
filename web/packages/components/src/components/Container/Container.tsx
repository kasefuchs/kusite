import classNames from "classnames";
import type { ComponentChildren } from "preact";
import * as styles from "./Container.module.scss";
import type { Props } from "./types";

export default function Container(props: Props): ComponentChildren {
  props.className = classNames(styles.container, props.className);

  return <div {...props} />;
}
