import RootStoreContext from "@/contexts/RootStoreContext";
import RootStore from "@/stores/RootStore";
import { Component, type ComponentChildren } from "preact";
import type { Props, State } from "./types";
import { PersistentStore } from "@kusite/store";
import localforage from "localforage";

export default class RootStoreProvider extends Component<Props, State> {
  private readonly store = new RootStore();
  private readonly persistence: PersistentStore = new PersistentStore(
    this.store,
    localforage,
  );

  public override readonly state: Readonly<State> = { initialized: false };

  public override async componentDidMount(): Promise<void> {
    try {
      await this.persistence.deserialize();
    } finally {
      this.persistence.setup();
      this.setState({ initialized: true });
    }
  }

  public override render(): ComponentChildren {
    return (
      this.state.initialized && (
        <RootStoreContext.Provider
          value={this.store}
          children={this.props.children}
        />
      )
    );
  }
}
