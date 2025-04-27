import type { Value } from "#contexts/RootStoreContext/types";
import { createContext } from "preact";

const RootStoreContext = createContext<Value>(null);

export default RootStoreContext;
