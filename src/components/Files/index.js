import React, { Component } from "react";
import { Descriptions } from "antd";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <h1>{text}</h1>
  },
  {
    title: "Uploaded By",
    dataIndex: "publisher",
    key: "publisher"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  }
];
const data = [];

export default class index extends Component {
  render() {
    const data = [...this.props.data];
    return (
      <div>
        {/* <Descriptions title='File Info' size="small" bordered>
          <Descriptions.Item label='File Name'>
            {this.props.data[0].name}
          </Descriptions.Item>
          <Descriptions.Item label='Phone'>
            +91{this.props.data[0].name}
          </Descriptions.Item>
        </Descriptions> */}
        <Table columns={columns} dataSource={data}  pagination={false} />
      </div>
    );
  }
}
