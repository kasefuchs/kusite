import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";
import { Widget } from "../../components/Widget";
import style from "./Blog.module.scss";
import type { Props } from "./types";

class Blog extends Component<Props> {
  public override render(props: Props): ComponentChild {
    return (
      <div className={style["blogRoot"]}>
        <Widget title={props.i18n!.t("blog.articles.title")} children=":(" />
      </div>
    );
  }
}

export default withTranslation("page")(Blog);
