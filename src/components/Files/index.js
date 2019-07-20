import React, { Component } from "reactn";

export default class index extends Component {
  render() {
    const data = this.props.data;

    return (
      <div>
        <table class='file_table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Uploaded By</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.publisher}</td>
              <td>{data.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
