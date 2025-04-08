import RootStoreContext from "#contexts/RootStoreContext";
import RootStore from "#stores/RootStore";
import { Component, type ComponentChildren } from "preact";
import type { Props, State } from "./types";

export default class StoreProvider extends Component<Props, State> {
  private readonly rootStore: RootStore = new RootStore();

  public override readonly state: Readonly<State> = { initialized: false };

  public override componentDidMount(): void {
    this.rootStore.restoreStoresData();
    this.rootStore.registerPersistenceReactions();
    this.setState({ initialized: true });
  }

  public override render(): ComponentChildren {
    return this.state.initialized ? (
      <RootStoreContext.Provider
        value={this.rootStore}
        children={this.props.children}
      />
    ) : undefined;
  }
}
