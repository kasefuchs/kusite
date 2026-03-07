import RootStoreProvider from "@/providers/RootStoreProvider";
import type { ComponentChildren } from "preact";
import type { Props } from "./types";

export default function ApplicationProvider(props: Props): ComponentChildren {
  return <RootStoreProvider>{props.children}</RootStoreProvider>;
}
