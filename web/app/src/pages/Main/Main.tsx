import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NavigationLink } from "../../components/NavigationLink";
import { NavigationRail } from "../../components/NavigationRail";
import { Blog } from "../Blog";
import { Home } from "../Home";
import style from "./Main.module.scss";
import { Props } from "./types";

class Main extends Component<Props> {
  public override render(props: Props): ComponentChild {
    return (
      <main className={style["mainRoot"]}>
        <Header icon={"https://avatars.githubusercontent.com/u/64592097"}>
          <NavigationRail>
            <NavigationLink
              to={"/"}
              children={props.i18n!.t("main.header.navigation.home")}
            />
            <NavigationLink
              to={"/blog"}
              children={props.i18n!.t("main.header.navigation.blog")}
            />
          </NavigationRail>
        </Header>
        <div className={style["mainContent"]}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/blog"} element={<Blog />} />
          </Routes>
        </div>
        <Footer>
          <span
            children={props.i18n!.t("main.footer.copyright", {
              year: new Date().getFullYear(),
            })}
          />
        </Footer>
      </main>
    );
  }
}

export default withTranslation("page")(Main);
