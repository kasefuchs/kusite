import NavigationLink from "#components/NavigationLink";
import RootStoreContext from "#contexts/RootStoreContext";
import Blog from "#pages/Blog";
import Home from "#pages/Home";
import { AppBar, IconButton, Toolbar, Typography } from "@kusite/components";
import { RiEarthLine } from "@remixicon/react";
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
      <div className={styles.root}>
        <AppBar element="header" className={styles.header}>
          <img className={styles.headerLogo} src={"https://avatars.githubusercontent.com/u/64592097"} />
          <Toolbar className={styles.headerContent}>
            <Toolbar element="nav" className={styles.navigationRail}>
              <NavigationLink to={"/"} children={t("header.navigation.home")} />
              <NavigationLink to={"/blog"} children={t("header.navigation.blog")} />
            </Toolbar>
            <Toolbar element="fieldset" className={styles.actionRail}>
              <IconButton onClick={() => this.context.i18n.nextLanguage()}>
                <RiEarthLine size={24} />
              </IconButton>
            </Toolbar>
          </Toolbar>
        </AppBar>
        <main className={styles.content}>
          <Switch>
            <Route path={"/"} children={<Home />} />
            <Route path={"/blog"} children={<Blog />} />
          </Switch>
        </main>
        <AppBar element="footer" className={styles.footer}>
          <Typography element="span" children={t("footer.copyright", { year: Root.copyrightYear })} />
        </AppBar>
      </div>
    );
  }
}

export default withTranslation("page", { keyPrefix: "root" })(Root);
