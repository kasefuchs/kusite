import clsx from "clsx";
import type { ComponentChild } from "preact";
import * as styles from "./Typography.module.scss";
import type { Props } from "./types";

export default function Typography({
  element: Element = "span",
  paragraph = false,
  className,
  ...rest
}: Props): ComponentChild {
  return <Element className={clsx(styles.typography, paragraph && styles.paragraph, className)} {...rest} />;
}
