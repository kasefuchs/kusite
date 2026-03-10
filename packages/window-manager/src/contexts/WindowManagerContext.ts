import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { WindowManagerStore } from "@/stores";

const WindowManagerContext = createContext<WindowManagerStore | null>(null);

export const useWindowManager = () => useContext(WindowManagerContext)!;

export default WindowManagerContext;
