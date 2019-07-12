import React, { Component } from "react";
import { Avatar,Icon } from "antd";
export default class index extends Component {
  render() {
    return (
      <>
        <div className='userCountOuter'>
          <span className='firstAvatar'>
            <Avatar
              style={{
                backgroundColor: "red",
                verticalAlign: "middle",
                border: "1px solid white"
              }}
              size='large'>
              U
            </Avatar>
          </span>

          <span className='secondAvatar'>
            <Avatar
              style={{
                backgroundColor: "red",
                verticalAlign: "middle",
                border: "1.1px solid white"
              }}
              size='large'>
              K
            </Avatar>
          </span>
          <span className='thirdAvatar'>
            <Avatar
              style={{
                backgroundColor: "gray",
                verticalAlign: "middle",
                border: "1.1px solid white"
              }}
              size='large'>
              +3
            </Avatar>
          </span>
          <span>
            <Icon
              style={{ fontSize: "1.5rem", marginTop: "0.3rem" }}
              type='usergroup-add'
            />
          </span>
          <Icon type='more' />
        </div>
      </>
    );
  }
}
