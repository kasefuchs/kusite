import Container from "#/Container";
import clsx from "clsx";
import type { ComponentChildren } from "preact";
import * as styles from "./AppBar.module.scss";
import type { Props } from "./types";

export default function AppBar({ className, ...rest }: Props): ComponentChildren {
  return <Container className={clsx(styles.appBar, className)} {...rest} />;
}
