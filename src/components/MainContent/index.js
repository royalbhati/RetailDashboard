import React, { Component, useGlobal, setGlobal } from "reactn";
import Detail from "../Detail";
import UserCount from "../UserCount";
import { Row, Col, Typography, Breadcrumb, Tag, Menu, Icon } from "antd";
import Files from "../Files";
import Sampling from "../Sampling";
import ContentTop from './Top'
import ContentBottom from './Bottom'
const { Title } = Typography;
const { Text } = Typography;

export default class index extends Component {
  state = {
    current: "ds"
  };
  getData() {
    if (this.props.data) {
      const data = this.props.data.filter(elem => {
        return elem.id === this.props.id;
      });
      this.setGlobal({
        detail: data
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.id !== nextProps.id || this.state.current !== nextState.current
    );
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  content = () => {
    if (this.state.current === "ds") {
      return <Detail data={this.global.detail} />;
    } else if (this.state.current === "fs") {
      return <Files data={this.global.detail} />;
    } else {
      return <Sampling />;
    }
  };

  render() {
    return (
      <div class='content grid-area'>
        <ContentTop></ContentTop>
        <ContentBottom></ContentBottom>

      </div>
    );
  }
}
