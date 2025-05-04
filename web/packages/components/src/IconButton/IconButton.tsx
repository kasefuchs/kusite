import clsx from "clsx";
import type { ComponentChildren } from "preact";
import * as styles from "./IconButton.module.scss";
import type { Props } from "./types";

export default function IconButton({ element: Element = "button", className, ...rest }: Props): ComponentChildren {
  return <Element className={clsx(styles.iconButton, className)} {...rest} />;
}
