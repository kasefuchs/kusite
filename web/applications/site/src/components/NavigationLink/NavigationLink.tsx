import { Typography } from "@kusite/components";
import clsx from "clsx";
import { Link, useRoute } from "wouter";
import * as styles from "./NavigationLink.module.scss";
import type { Props } from "./types";

export default function NavigationLink({ children, ...rest }: Props) {
  const [isActive] = useRoute(rest.to);

  return (
    <Link asChild {...rest}>
      <Typography element="a" children={children} className={clsx(styles.link, isActive && styles.active)} />
    </Link>
  );
}
