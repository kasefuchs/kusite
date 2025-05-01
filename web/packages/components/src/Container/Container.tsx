import clsx from "clsx";
import type { ComponentChildren } from "preact";
import * as styles from "./Container.module.scss";
import type { Props } from "./types";

export default function Container({ element: Element = "div", className, ...rest }: Props): ComponentChildren {
  return <Element className={clsx(styles.container, className)} {...rest} />;
}
