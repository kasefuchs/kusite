import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";
import { Widget } from "../../components/Widget";
import style from "./Home.module.scss";
import type { Props } from "./types";

class Home extends Component<Props> {
  public override render(props: Props): ComponentChild {
    return (
      <div className={style["homeRoot"]}>
        <div className={style["homeRootPrimary"]}>
          <Widget title={props.i18n!.t("home.primary.welcome.title")} />
        </div>
        <div className={style["homeRootSecondary"]}>
          <Widget title="Test" />
        </div>
      </div>
    );
  }
}

export default withTranslation("page")(Home);
