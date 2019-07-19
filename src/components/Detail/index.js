import React, { Component } from "react";
import { Row, Col, Input, Typography, Select,Icon } from "antd";
const { Text, Title } = Typography;
const { Option } = Select;

export default class Details extends Component {
  render() {
    console.log("detail", this.props.data);

    return (
      <div>
        <Row>
          <Col span={12} push={0}>
            <div className='imgCover'>
              <img src={this.props.data[0].url} />
            </div>
            <div className='imgCoverDelete'>
              <Icon type='delete' />
            </div>
          </Col>
          <Col span={12} pull={1}>
            <div className='inputBox'>
              <Title level={4} className='inputBoxLabel'>
                Design Name
              </Title>
              <Input
                placeholder='Design name'
                value={this.props.data[0].name}
              />
            </div>
            <div className='inputBox'>
              <Title level={4} className='inputBoxLabel'>
                Design ID
              </Title>

              <Input
                placeholder='Design ID'
                value={this.props.data[0].id}
              />
            </div>
            <div className='inputBox'>
              <Title level={4} className='inputBoxLabel'>
                Design Category
              </Title>

              <Select
                showSearch
                style={{ width: 200 }}
                placeholder='Women'
                optionFilterProp='children'
               value={this.props.data[0].category1}>
                <Option value='women'>Women</Option>
                <Option value='men'>Men</Option>
                <Option value='kids'>Kids</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 200, marginLeft: "0.1rem" }}
                placeholder='Western'
                optionFilterProp='children'
                value={this.props.data[0].category2}>
                <Option value='Western'>Western</Option>
                <Option value='Traditional'>Traditional</Option>
                <Option value='Cultural'>Sports</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
