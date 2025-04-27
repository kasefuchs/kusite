import Widget from "#components/Widget";
import * as styles from "#pages/Blog/Blog.module.scss";
import type { Props } from "#pages/Blog/types";
import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";

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
