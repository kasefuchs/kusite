import { createContext } from "preact";
import type { Value } from "./types";
import { useContext } from "preact/hooks";

const WindowManagerContext = createContext<Value | null>(null);

export const useWindowManager = () => useContext(WindowManagerContext)!;

export default WindowManagerContext;
export type { Value as WindowManagerContextValue } from "./types";
