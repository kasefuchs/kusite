import Container from "#components/Container";
import NavigationLink from "#components/NavigationLink";
import Blog from "#pages/Blog";
import Home from "#pages/Home";
import { Component, type ComponentChild } from "preact";
import { withTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import * as styles from "./Main.module.scss";
import type { Props } from "./types";

class Main extends Component<Props> {
  private static copyrightYear: number = new Date().getFullYear();

  public override render(props: Props): ComponentChild {
    const { t } = props;

    return (
      <main className={styles.root}>
        <Container className={styles.header}>
          <img
            className={styles.headerIcon}
            src={"https://avatars.githubusercontent.com/u/64592097"}
          />
          <nav className={styles.navigationRail}>
            <NavigationLink to={"/"} children={t("header.navigation.home")} />
            <NavigationLink
              to={"/blog"}
              children={t("header.navigation.blog")}
            />
          </nav>
        </Container>
        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/blog"} element={<Blog />} />
          </Routes>
        </div>
        <Container className={styles.footer}>
          <span
            children={t("footer.copyright", { year: Main.copyrightYear })}
          />
        </Container>
      </main>
    );
  }
}

export default withTranslation("page", { keyPrefix: "main" })(Main);
