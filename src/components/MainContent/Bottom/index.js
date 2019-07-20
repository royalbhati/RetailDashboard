import React, { Component } from "reactn";
// import Detail from '../../Detail'
import Files from "../../Files";
import Sampling from "../../Sampling";
import Detail from "../../Detail";
export default class contentBottom extends Component {
  content = () => {
    if (this.global.current === "ds") {
      return <Detail data={this.global.data[this.global.key]} />;
    } else if (this.global.current === "fs") {
      return <Files data={this.global.data[this.global.key]} />;
    } else {
      return <Sampling />;
    }
  };
  render() {
    console.log(
      "category",
      this.global.data && this.global.data[this.global.key].category1
    );

    return (
      <div>
        <div class='content_bottom'>{this.content()}</div>
      </div>
    );
  }
}
