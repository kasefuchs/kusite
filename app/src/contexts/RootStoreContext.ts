import { createContext } from "preact";
import { useContext } from "preact/hooks";
import RootStore from "@/stores/RootStore";

const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => useContext(RootStoreContext)!;

export default RootStoreContext;
