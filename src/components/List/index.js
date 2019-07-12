import React, { setGlobal } from "reactn";
import { List, Avatar } from "antd";

export default class index extends React.Component {
  onClick = e => {
    console.log("on clickkkkkk", e);
    this.setGlobal({ mainData: e });
  };
  render() {
    return (
      <List
        className='list'
        itemLayout='horizontal'
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => this.onClick(item.id)}>
                  {item.name}
                </span>
              }
              description={item.status}
            />
          </List.Item>
        )}
      />
    );
  }
}
