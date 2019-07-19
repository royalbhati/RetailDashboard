import React, { Component, useGlobal, setGlobal } from "reactn";
import {
  Layout,
  Row,
  Col,
  Menu,
  Breadcrumb,
  Icon,
  Typography,
  Input,
  Tag,
  Avatar,
  Select,
  Badge,
  Button
} from "antd";
import List from "../../components/List";
import Detail from "../Detail/";
import UserCount from "../UserCount/";
import Header from "../Header/";
import MainContent from "../MainContent";
import Modal from "react-modal";

import {
  CollectionSvg,
  SamplingSvg,
  MessageSvg,
  ProductionSvg
} from "../Svg/collection";
const { Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;
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
setGlobal({
  mainData: 1,
  x: 0,
  detail: ""
});

const data = [
  {
    id: 1,
    name: "Gypress Dress High Low Corset Purple Boho",
    status: "Draft",
    publisher: "Utkarsh Arya",
    date: "June 15 2009",
    url:
      "https://img.ltwebstatic.com/images/pi/201707/74/14992181781318581113_thumbnail_405x552.jpg"
  },
  {
    id: 2,
    name: "Printed striped shirt with border",
    status: "Sampling",
    publisher: "John Dohia",
    date: "May 25 2009",
    url:
      "https://img.shein.com/images/shein.com/201705/29/14955400943370387458_thumbnail_405x552.jpg"
  },
  {
    id: 3,
    name: "Brown Trouser",
    status: "Production",
    publisher: "John Dohia",
    date: "December 25 2009",
    url:
      "https://img.ltwebstatic.com/images2_pi/2018/09/20/15374216571404048699_thumbnail_405x552.jpg"
  },
  {
    id: 4,
    name: "Red Trouser",
    status: "Production",
    publisher: "Utkarsh Arya",
    date: "August 15 2010",
    url:
      "https://img.ltwebstatic.com/images2_pi/2019/04/17/155548036891307857_thumbnail_405x552.jpg"
  },
  {
    id: 5,
    name: "Purple Shirt",
    status: "Draft",
    publisher: "John Dohia",
    date: "June 25 2009",
    url:
      "https://img.ltwebstatic.com/images2_pi/2019/05/30/15592023154009842115_thumbnail_405x552.jpg"
  }
];

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    fullData: data,
    filteredData: data,
    clicked: false,
    current: "ds",
    modalIsOpen: false,
    designID: "",
    designName: "",
    category1: "",
    category2: "",
    someData: ""
  };
  
  

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClick = () => {
    this.setState({
      clicked: true
    });
  };

  sampling = () => {
    const data = this.state.fullData.filter(elem => {
      return elem.status === "Sampling";
    });
    console.log("ssssampling", data);

    this.setState({
      filteredData: data,
      clicked: true
    });
  };

  fullCollection = () => {
    this.setState({
      filteredData: this.state.fullData,
      clicked: true
    });
  };
  draft = () => {
    const data = this.state.fullData.filter(elem => {
      return elem.status === "Draft";
    });

    this.setState({
      filteredData: data,
      clicked: true
    });
  };

  onAdd = () => {
    console.log("ADD NEW DESIGN");
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  designSubmit = () => {
    //  this.setState({
    //    fullData:{...data,state.newDesign}}
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
    e.preventDefault()
    const newData = {
      id: this.state.designID,
      name: this.state.designName,
      category1: this.state.category1,
      category2: this.state.category2,
      status: "Sampling",
      publisher: "John Dohia",
      date: "May 25 2009",
      url:"https://img.shein.com/images/shein.com/201705/29/14955400943370387458_thumbnail_405x552.jpg"
    };

    // data = [...data, newData];
    this.setState(prevState => ({
      fullData: [...prevState.fullData, newData],
      someData: newData
    }));
  };
  fetchCollection = data => {
    return <List data={data} />;
  };
  render() {
    console.log("stateeee", this.state);
    return (
      <>
        <Header />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsed={true}>
            <div className='logo' />
            <div className='sidebarGrid'>
              <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
                <Menu.Item key='1' onClick={this.fullCollection}>
                  <Icon className='icons' component={CollectionSvg} />

                  <span>Collections</span>
                </Menu.Item>
                <Menu.Item key='2' onClick={this.sampling}>
                  <Icon className='icons' component={SamplingSvg} />
                  <span>Sampling</span>
                </Menu.Item>
                <Menu.Item key='3' onClick={this.draft}>
                  <Icon className='icons' component={ProductionSvg} />
                  <span>Production</span>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Icon className='icons' component={MessageSvg} />{" "}
                  <Badge count={25} />
                  <span
                    style={{
                      marginLeft: "1rem"
                    }}>
                    Messages
                  </span>
                </Menu.Item>
              </Menu>
              <div className='sidebarGridContent' />
              <Menu theme='dark' defaultSelectedKeys={["2"]} mode='inline'>
                <Menu.Item key='5'>
                  <Icon className='icons' type='user' />
                  <span>User</span>
                </Menu.Item>
                <Menu.Item key='6'>
                  <Icon className='icons' type='setting' />

                  <span>Settings</span>
                </Menu.Item>
                <Menu.Item key='7'>
                  <Icon className='icons' type='logout' />
                  <span>Logout</span>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          {/* <div className="Mainsider"> */}
          <Sider width={250} height={500} style={{ background: "#fff" }}>
            {this.state.clicked
              ? this.fetchCollection(this.state.filteredData)
              : this.fetchCollection(this.state.fullData)}

            <div style={{ cursor: "pointer" }} className='designAdd'>
              <span onClick={this.openModal}>
                <Icon
                  style={{
                    marginRight: "1rem"
                  }}
                  type='plus'
                />{" "}
                Add new Design
              </span>
            </div>
          </Sider>
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
                }}
              >Close</button>
            </form>
          </Modal>
          {/* </div> */}

          <Layout>
            <Content style={{ margin: "0 16px" }}>
              <MainContent
                id={this.global.mainData}
                data={this.state.fullData}
              />
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
