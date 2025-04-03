import { createContext } from "preact";
import type { Value } from "./types";

const RootStoreContext = createContext<Value>(null);

export default RootStoreContext;
