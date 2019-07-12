import React, { Component } from "react";
import { Layout, Input, Icon, Badge } from "antd";
const { Header } = Layout;
const { Search } = Input;

export default class index extends Component {
  render() {
    return (
      <div>
        <Header
          className='headerr'
          style={{
            background: "#fff",
            padding: 0
          }}>
          <div className='headerbox'>
            <span>
              <h1>Zara Retail Limited</h1>
            </span>
            <span>
              <Search
                placeholder='input search text'
                onSearch={value => console.log(value)}
                style={{ width: 400 }}
              />
            </span>
            <span>
              <Icon style={{"fontSize":"1.3rem"}} type='bell' />
              <Badge count={5} />
            </span>
          </div>
        </Header>
      </div>
    );
  }
}
