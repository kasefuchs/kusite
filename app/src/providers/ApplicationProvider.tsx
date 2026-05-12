import RootStoreProvider from "@/providers/RootStoreProvider";
import type { ComponentChild, ComponentChildren } from "preact";

export interface ApplicationProviderProps {
  children: ComponentChildren;
}

export default function ApplicationProvider({ children }: ApplicationProviderProps): ComponentChild {
  return <RootStoreProvider children={children} />;
}
