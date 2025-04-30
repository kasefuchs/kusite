import clsx from "clsx";
import type { ComponentChild } from "preact";
import * as styles from "./Toolbar.module.scss";
import type { Props } from "./types";

export default function Container({ element: Element = "div", className, ...rest }: Props): ComponentChild {
  return <Element className={clsx(styles.toolbar, className)} {...rest} />;
}
