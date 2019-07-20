import React, { Component } from "reactn";
import Modal from "react-modal";
import { Row, Col, Input, Select, Typography } from "antd";
const { Title } = Typography;
const { Option } = Select;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
export default class index extends Component {
  state = {
    modalIsOpen: false,
    designID: "",
    designName: "",
    category1: "",
    category2: "",
    someData: ""
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  onChangeCategory1 = value => {
    console.log("dds");
    console.log(value);

    this.setState({
      category1: value
    });
  };
  onChangeCategory2 = value => {
    console.log("dds");
    console.log(value);

    this.setState({
      category2: value
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newData = {
      id: this.global.mainData.length + 1,
      name: this.state.designName,
      category1: this.state.category1,
      category2: this.state.category2,
      status: "Sampling",
      publisher: "John Dohia",
      date: "May 25 2009",
      url:
        "https://img.shein.com/images/shein.com/201705/29/14955400943370387458_thumbnail_405x552.jpg"
    };

    // data = [...data, newData];
    this.setGlobal({
      data: [...this.global.data, newData],
      mainData: [...this.global.data, newData]
    });
  };
  fetchdata = () => {
    return this.global.data.map(elem => {
      return (
        <div onClick={e => this.setKey(elem.id)} class='side_list_item'>
          {elem.name}
          <div class='side_list_item_subtitle'>{elem.status}</div>
          <hr />
        </div>
      );
    });
  };
  setKey = e => {
    this.setGlobal({
      key: e - 1
    });
  };
  render() {
    console.log("global", this.global.data);

    return (
      <div class='side2'>
        <div class='side_2_area_top'>
          <div class='side_list_static_item'>
            <img src='https://image.flaticon.com/icons/svg/54/54321.svg' />{" "}
            All Designs
            <hr />
          </div>
          {this.global.data ? this.fetchdata() : null}
        </div>
        <div onClick={this.openModal} class='side_2_area_bottom'>
          Add New Design{" "}
          <span>
            <i class='fas fa-plus' />
          </span>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'>
          <form onSubmit={this.onSubmit}>
            <Row>
              <Col span={18} pull={0}>
                <div className='inputBox'>
                  <Title level={4} className='inputBoxLabel'>
                    Design Name
                  </Title>
                  <Input
                    placeholder='Design name'
                    name='designName'
                    onChange={this.onChange}
                    value={this.state.designName}
                  />
                </div>
                <div className='inputBox'>
                  <Title level={4} className='inputBoxLabel'>
                    Design ID
                  </Title>

                  <Input
                    placeholder='Design ID'
                    name='designID'
                    onChange={this.onChange}
                    value={this.state.designID}
                  />
                </div>
                <Row>
                  <div className='inputBox'>
                    <Title level={4} className='inputBoxLabel'>
                      Design Category
                    </Title>
                    <Col span={6}>
                      <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder='Women'
                        name='category1'
                        onChange={this.onChangeCategory1}
                        value={this.state.category1}
                        optionFilterProp='children'>
                        <Option value='women'>Women</Option>
                        <Option value='men'>Men</Option>
                        <Option value='kids'>Kids</Option>
                      </Select>
                    </Col>
                    <Col span={6} push={2}>
                      {/* <Title
                                       level={4}
                                       className='inputBoxLabel'>
                                       Design Category
                                     </Title> */}

                      <Select
                        showSearch
                        style={{
                          width: 200,
                          marginLeft: "2rem"
                        }}
                        placeholder='Western'
                        name='category2'
                        onChange={this.onChangeCategory2}
                        value={this.state.category2}
                        optionFilterProp='children'>
                        <Option value='western'>Western</Option>
                        <Option value='Traditional'>Traditional</Option>
                        <Option value='cultural'>Cultural</Option>
                      </Select>
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
            <input
              type='submit'
              class='button is-primary'
              style={{
                marginLeft: "1rem",
                marginTop: "2rem"
              }}
            />
            <button
              class='button is-danger'
              onClick={this.closeModal}
              style={{
                marginLeft: "1rem",
                marginTop: "2rem"
              }}>
              Close
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
