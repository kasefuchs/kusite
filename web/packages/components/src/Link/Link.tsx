import Typography from "#/Typography";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import { underlineMapping } from "./consts";
import * as styles from "./Link.module.scss";
import type { Props } from "./types";

export default function Link({ className, underline = "hover", ...rest }: Props): ComponentChildren {
  return <Typography element="a" className={clsx(styles.link, underlineMapping[underline], className)} {...rest} />;
}
