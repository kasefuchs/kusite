import { Component, type ComponentChild } from "preact";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "../../components/Header";
import { NavigationLink, NavigationRail } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Widget } from "../../components/Widget";
import { Home } from "../Home";
import { Blog } from "../Blog";
import style from "./Application.module.scss";

export default class Application extends Component {
  private static currentYear: number = new Date().getFullYear();

  public override render(): ComponentChild {
    return (
      <BrowserRouter>
        <div className={style["applicationContainer"]}>
          <Header icon={"https://avatars.githubusercontent.com/u/64592097"}>
            <NavigationRail>
              <NavigationLink to={"/"}>Home</NavigationLink>
              <NavigationLink to={"/blog"}>Blog</NavigationLink>
            </NavigationRail>
          </Header>
          <div className={style["applicationContent"]}>
            <div className={style["applicationContentPrimary"]}>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/blog"} element={<Blog />} />
              </Routes>
            </div>
            <div className={style["applicationContentWidgets"]}>
              <Widget title={"Test"}>Test</Widget>
            </div>
          </div>
          <Footer>
            <span>Copyright © {Application.currentYear} — Kasefuchs</span>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}
