import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div class='header grid-area'>
        <div>
          <img src='./assests/logo1.png' alt="" />
        </div>
        <div class='header_title'>Zara Retail Limited</div>
        <div class='header_search'>
          <i
            style={{ color: "black" }}
            class='fas fa-search header_search_icon'
          />
          <input
            type='text'
            style={{ border: "none" }}
            placeholder='Search designs or Collections'
          />
        </div>
        <div class='notification_bell'>
          <i class='far fa-bell' /> <span class='top_badge'>3</span>
        </div>
      </div>
    );
  }
}
