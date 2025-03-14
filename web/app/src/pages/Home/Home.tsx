import { Component, type ComponentChild, Fragment } from "preact";
import { Widget } from "../../components/Widget";

export default class Home extends Component {
  public override render(): ComponentChild {
    return (
      <Fragment>
        <Widget title={"Welcome"}>Hello?</Widget>
      </Fragment>
    );
  }
}
