import RootStoreContext from "#contexts/RootStoreContext";
import type { Props, State } from "#providers/StoreProvider/types";
import RootStore from "#stores/RootStore";
import { Component, type ComponentChildren } from "preact";

export default class StoreProvider extends Component<Props, State> {
  private readonly rootStore: RootStore = new RootStore();

  public override readonly state: Readonly<State> = { initialized: false };

  public override async componentDidMount(): Promise<void> {
    try {
      await this.rootStore.restoreStoresData();
    } finally {
      this.rootStore.registerPersistenceReactions();
      this.setState({ initialized: true });
    }
  }

  public override render(): ComponentChildren {
    return this.state.initialized ? (
      <RootStoreContext.Provider value={this.rootStore} children={this.props.children} />
    ) : undefined;
  }
}
