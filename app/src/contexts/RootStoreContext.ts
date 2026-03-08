import { createContext } from "preact";
import RootStore from "@/stores/RootStore.ts";

const RootStoreContext = createContext<RootStore | null>(null);

export default RootStoreContext;
