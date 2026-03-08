import { createContext } from "preact";
import type { Value } from "./types";
import { useContext } from "preact/hooks";

const WindowInstanceContext = createContext<Value | null>(null);

export const useWindowInstance = () => useContext(WindowInstanceContext)!;

export default WindowInstanceContext;
export type { Value as WindowInstanceContextValue } from "./types";
