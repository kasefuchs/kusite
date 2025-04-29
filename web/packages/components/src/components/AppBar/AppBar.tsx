import Container from "#components/Container";
import clsx from "clsx";
import type { ComponentChild } from "preact";
import * as styles from "./AppBar.module.scss";
import type { Props } from "./types";

export default function AppBar({ className, ...rest }: Props): ComponentChild {
  return <Container className={clsx(styles.appBar, className)} {...rest} />;
}
