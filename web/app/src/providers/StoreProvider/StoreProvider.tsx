import RootStoreContext from "#contexts/RootStoreContext";
import RootStore from "#stores/RootStore";
import { Component, type ComponentChildren } from "preact";
import type { Props } from "./types";

export default class StoreProvider extends Component<Props> {
  private readonly rootStore: RootStore = new RootStore();

  public override render(props: Props): ComponentChildren {
    return (
      <RootStoreContext.Provider
        value={this.rootStore}
        children={props.children}
      />
    );
  }
}
