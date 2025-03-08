import { Component, Fragment, type ReactNode } from "preact/compat";
import styles from "./Application.module.scss";

export default class Application extends Component {
  public render(): ReactNode {
    return (
      <Fragment>
        <div className={styles["container"]}>
          <span>Placeholder</span>
        </div>
      </Fragment>
    );
  }
}
