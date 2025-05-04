import MarkdownWidget from "#/components/MarkdownWidget";
import { Component, type ComponentChildren } from "preact";
import { withTranslation } from "react-i18next";
import * as styles from "./Home.module.scss";
import type { Props } from "./types";

class Home extends Component<Props> {
  public override render(): ComponentChildren {
    const { t } = this.props;

    return (
      <div className={styles.homeRoot}>
        <div className={styles.homePrimary}>
          <MarkdownWidget title={t("primary.welcome.title")} children={t("primary.welcome.content")} />
        </div>
        <div className={styles.homeSecondary}>
          <MarkdownWidget title="Test">Hello?</MarkdownWidget>
        </div>
      </div>
    );
  }
}

export default withTranslation("page", { keyPrefix: "home" })(Home);
