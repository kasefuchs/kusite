import Widget from "#components/Widget";
import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";
import * as styles from "./Blog.module.scss";
import type { Props } from "./types";

class Blog extends Component<Props> {
  public override render(): ComponentChild {
    const { t } = this.props;

    return (
      <div className={styles.root}>
        <Widget title={t("articles.title")} children=":(" />
      </div>
    );
  }
}

export default withTranslation("page", { keyPrefix: "blog" })(Blog);
