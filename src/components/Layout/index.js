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
  Badge
} from "antd";
import { Popover, Button } from "antd";
import List from "../../components/List";
import Detail from "../Detail/";
import UserCount from "../UserCount/";
import Header from "../Header/";
import MainContent from "../MainContent";
import {
  CollectionSvg,
  SamplingSvg,
  MessageSvg,
  ProductionSvg
} from "../Svg/collection";
const { Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { Text } = Typography;

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
    current: "ds"
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

  fetchCollection = data => {
    return <List data={data} />;
  };
  render() {
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
                <Menu.Item key='4' >
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
              <Icon style={{ marginRight: "1rem" }} type='plus' /> Add new
              Design
            </div>
          </Sider>
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
