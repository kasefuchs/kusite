import Container from "#components/Container";
import HeaderIconButton from "#components/HeaderIconButton";
import NavigationLink from "#components/NavigationLink";
import RootStoreContext from "#contexts/RootStoreContext";
import Blog from "#pages/Blog";
import Home from "#pages/Home";
import { RiGlobalLine } from "@remixicon/react";
import { observer } from "mobx-react";
import { Component, type ComponentChild, type ContextType } from "preact";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "wouter";
import * as styles from "./Root.module.scss";
import type { Props } from "./types";

@observer
class Root extends Component<Props> {
  private static readonly copyrightYear: number = new Date().getFullYear();

  public static override readonly contextType = RootStoreContext;
  declare public readonly context: NonNullable<ContextType<typeof RootStoreContext>>;

  public override render(): ComponentChild {
    const { t } = this.props;

    return (
      <main className={styles.root}>
        <Container className={styles.header}>
          <img className={styles.headerLogo} src={"https://avatars.githubusercontent.com/u/64592097"} />
          <div className={styles.headerContent}>
            <nav className={styles.navigationRail}>
              <NavigationLink to={"/"} children={t("header.navigation.home")} />
              <NavigationLink to={"/blog"} children={t("header.navigation.blog")} />
            </nav>
            <div className={styles.actionRail}>
              <HeaderIconButton
                onClick={() => this.context.i18n.nextLanguage()}
                children={<RiGlobalLine size={20} />}
              />
            </div>
          </div>
        </Container>
        <div className={styles.content}>
          <Switch>
            <Route path={"/"} children={<Home />} />
            <Route path={"/blog"} children={<Blog />} />
          </Switch>
        </div>
        <Container className={styles.footer}>
          <span children={t("footer.copyright", { year: Root.copyrightYear })} />
        </Container>
      </main>
    );
  }
}

export default withTranslation("page", { keyPrefix: "root" })(Root);
