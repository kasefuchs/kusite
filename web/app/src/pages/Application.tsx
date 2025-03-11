import { Component, type ComponentChild } from "preact";
import { Header } from "../components/Header";
import { NavigationItem, NavigationRail } from "../components/Navigation";
import style from "./Application.module.scss";
import { Footer } from "../components/Footer";

export default class Application extends Component {
  public override render(): ComponentChild {
    const currentYear = new Date().getFullYear();

    return (
      <div className={style["container"]}>
        <Header icon={"https://avatars.githubusercontent.com/u/64592097"}>
          <NavigationRail>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem active>Blog</NavigationItem>
            <NavigationItem>Otters</NavigationItem>
          </NavigationRail>
        </Header>
        <div className={style["content"]}></div>
        <Footer>
          <span>Copyright © {currentYear} — Kasefuchs</span>
        </Footer>
      </div>
    );
  }
}
