import type { WithParamsProps } from "#utilities/hoc/types";
import type { ComponentType } from "preact";
import { type Params, useParams } from "wouter";

export default function withParams<P extends object>(Component: ComponentType<P & WithParamsProps>) {
  return (props: P) => {
    const params = useParams<Params>();
    return <Component {...props} params={params} />;
  };
}
