import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import { Link } from "wouter";
import * as styles from "./NavigationLink.module.scss";
import type { Props } from "./types";

export default class NavigationLink extends Component<Props> {
  private static getClassNames(isActive: boolean): string {
    return classNames(styles.link, isActive ? styles.active : undefined);
  }

  public override render(): ComponentChildren {
    return <Link {...this.props} className={NavigationLink.getClassNames} />;
  }
}
