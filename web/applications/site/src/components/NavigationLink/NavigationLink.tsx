import * as styles from "#components/NavigationLink/NavigationLink.module.scss";
import type { Props } from "#components/NavigationLink/types";
import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import { Link } from "wouter";

export default class NavigationLink extends Component<Props> {
  private static getClassNames(isActive: boolean): string {
    return classNames(styles.link, isActive ? styles.active : undefined);
  }

  public override render(): ComponentChildren {
    return <Link {...this.props} className={NavigationLink.getClassNames} />;
  }
}
