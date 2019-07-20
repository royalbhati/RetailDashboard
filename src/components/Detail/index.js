import React, { Component } from "reactn";
import { Row, Col, Input, Typography, Select, Icon } from "antd";
const { Text, Title } = Typography;
const { Option } = Select;

export default class Details extends Component {
  render() {

    return (
      <>
        <div class='collection_content'>
          <div class='collection_img'>
            <div class='collection_img_text'>Cover Image</div>
            <img
              src={
                this.global.data && this.global.data[this.global.key].url
              }
              alt=''
              sizes=''
              srcset=''
            />
            <div class='collection_img_delete'>
              <span class='collection_img_delete_icon'>
                <i class='far fa-trash-alt' />
              </span>
            </div>
          </div>
          <div class='collection_img_details'>
            <div class='design_name'>
              <div class='input_label'>Design Name</div>
              <input
                class='content_input'
                type='text'
                placeholder='Design name'
                value={
                  this.global.data && this.global.data[this.global.key].name
                }
              />
            </div>

            <div class='design_id'>
              <div class='input_label'>Design Id</div>
              <input
                class='content_input'
                type='text'
                placeholder='Design id'
                value={
                  this.global.data && this.global.data[this.global.key].id
                }
              />
            </div>
            <div class='design_category'>
              <div class='input_label'>Design Category</div>
              <div class='design_category_input_grid'>
                <select
                  class='design_category_input_box'
                  type='text'
                  // placeholder='Men'
                  defaultValue={
                    // "women"
                    this.global.data &&
                    this.global.data[this.global.key].category1
                  }>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                  <option value='kids'>Kids</option>
                </select>
                <select
                  class='design_category_input_box'
                  type='text'
                  defaultValue={
                    this.global.data &&
                    this.global.data[this.global.key].category2
                  }>
                  <option value='trad'>Traditional</option>
                  <option value='cult'>Cultural</option>
                  <option value='west'>Western</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
