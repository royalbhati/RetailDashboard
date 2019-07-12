import React, { Component, useGlobal, setGlobal } from "reactn";
import Detail from "../Detail";
import UserCount from "../UserCount";
import { Row, Col, Typography, Breadcrumb, Tag, Menu,Icon } from "antd";
import Files from "../Files";
import Sampling from "../Sampling";
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
      this.props.id != nextProps.id || this.state.current != nextState.current
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
      return (<Detail data={this.global.detail} />);
    } else if (this.state.current === "fs") {
      return <Files />;
    } else {
      return <Sampling />;
    }
  };

  render() {
    const tagColor = {
      Draft: "volcano",
      Sampling: "cyan",
      Production: "lime"
    };
    this.getData();
    const new_data = this.global.detail;
    console.log("data", this.global.detail);
    return (
      <div>
        <div
          style={{
            padding: 0,
            background: "#fff",
            minHeight: 3,
            marginTop: "0.8rem"
          }}>
          <Row>
            <Col span={18} push={0}>
              <div style={{ marginLeft: "1rem" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Collections</Breadcrumb.Item>
                  <Breadcrumb.Item>Summer Collections 2019</Breadcrumb.Item>
                </Breadcrumb>
                <Title level={3}>
                  {new_data[0].name}{" "}
                  <Tag color={tagColor[new_data[0].status]}>
                    {new_data[0].status}
                  </Tag>
                </Title>
                <Text type='secondary'>
                  by {new_data[0].publisher} &nbsp; &nbsp; &nbsp;{" "}
                  {new_data[0].date} 08:45pm
                </Text>
              </div>
            </Col>
            <Col span={6}>
              <div className='userCount'>
                <UserCount />
              </div>
            </Col>
          </Row>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{ marginTop: "0.8rem" }}
            mode='horizontal'>
            <Menu.Item key='ds'>Design Summary</Menu.Item>
            <Menu.Item key='fs'>Files</Menu.Item>
            <Menu.Item key='sd'>Sampling Details</Menu.Item>
          </Menu>
        </div>

        <div
          style={{
            padding: 24,
            background: "#fff",
            minHeight: 360,
            marginTop: "0.8rem"
          }}>
          {this.content()}
        </div>
      </div>
    );
  }
}
