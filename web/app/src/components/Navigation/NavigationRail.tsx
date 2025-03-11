import { Component, type ComponentChildren } from "preact";
import type { NavigationRailProps } from "./types.d.ts";
import style from "./NavigationRail.module.scss";

export default class NavigationRail extends Component<NavigationRailProps> {
  public override render(props: NavigationRailProps): ComponentChildren {
    return (
      <nav className={style["nav"]}>
        <ul className={style["rail"]} children={props.children} />
      </nav>
    );
  }
}
