import React, { Component,setGlobal } from "reactn";
import { Menu } from "antd";
export default class contentTop extends Component {
  handleClick = e => {
    console.log("click ", e);
    this.setGlobal({
      current: e.key
    });
  };
  render() {
    console.log("ddddd", this.global.key);

    return (
      <div>
        <div class='content_top'>
          <div class='bread_crumb'>
            <span style={{ color: "grey" }}>Collections</span>{" "}
            <img src='https://www.nicepng.com/png/full/79-790308_btn-scroll-next-comments-side-arrow-icon-png.png' />
            <span
              style={{
                color: "rgb(104, 102, 102)"
              }}>
              Summer Collections 2019
            </span>{" "}
            <img src='https://www.nicepng.com/png/full/79-790308_btn-scroll-next-comments-side-arrow-icon-png.png' />
          </div>
          <div class='content_title'>
            <div class='content_left'>
              <div class='content_title_collection_name'>
                {this.global.data && this.global.data[this.global.key].name}{" "}
                <span id='status'>
                  {this.global.data && this.global.data[this.global.key].status}
                </span>
              </div>
              <div class='content_title_collection_details'>
                by{" "}
                <span class='publisher'>
                  {" "}
                  {this.global.data &&
                    this.global.data[this.global.key].publisher}
                </span>
                <span class='date'>
                  {this.global.data && this.global.data[this.global.key].date}{" "}
                  8:45pm
                </span>
              </div>
            </div>
            <div class='content_right'>
              <div class='userCount'>
                <div class='user1'>
                  <span>DW</span>
                </div>
                <div class='user2'>
                  <span>KK</span>
                </div>
                <div class='remaining'>
                  <span>+3</span>
                </div>
                <div class='user_img'>
                  <img src='./assests/ic-people-outline.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          <div class='content_nav_tabs'>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.global.current]}
              style={{ marginTop: "0.8rem" }}
              mode='horizontal'>
              <Menu.Item key='ds'>Design Summary</Menu.Item>
              <Menu.Item key='fs'>Files</Menu.Item>
              <Menu.Item key='sd'>Sampling Details</Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
