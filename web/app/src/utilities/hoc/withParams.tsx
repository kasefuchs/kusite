import type { ComponentType } from "preact";
import { useParams, type Params } from "wouter";
import type { WithParamsProps } from "./types";

export default function withParams<P extends object>(Component: ComponentType<P & WithParamsProps>) {
  return (props: P) => {
    const params = useParams<Params>();
    return <Component {...props} params={params} />;
  };
}
