import { useParams, type Params } from "react-router";
import type { ComponentType } from "preact";
import type { WithRouterParamsProps } from "./types";

export default <P extends object>(
  Component: ComponentType<P & WithRouterParamsProps>,
) => {
  return (props: P) => {
    const params = useParams<Params>();
    return <Component {...props} params={params} />;
  };
};
