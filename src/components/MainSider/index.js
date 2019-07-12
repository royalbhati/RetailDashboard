import React, { Component } from "react";
import { Layout, Icon, Avatar } from "antd";
const { Sider, Menu } = Layout;

export default class index extends Component {
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    //   onClick={this.fullCollection}
    // onClick={this.sampling}
    // onClick={this.draft}
    return (
      <Sider collapsed={true}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          <Menu.Item key='1'>
            {/* <Icon type='desktop' /> */}
            <Avatar src='../../img/ic_nav_account.svg' />
            <span>Sampling</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='file' />
            <span>Sampling</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='delete' />
            <span>Draft</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
