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
import MainSider from "../MainSider";
import SecondSider from "../SecondarySider";
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
var data = [
  {
    id: 1,
    name: "Gypress Dress High Low Corset Purple Boho",
    status: "Draft",
    publisher: "Utkarsh Arya",
    date: "June 15 2009",
    url:
      "https://img.ltwebstatic.com/images/pi/201707/74/14992181781318581113_thumbnail_405x552.jpg",
    category2: "west",
    category1: "women"
  },
  {
    id: 2,
    name: "Printed striped shirt with border",
    status: "Sampling",
    publisher: "John Dohia",
    date: "May 25 2009",
    url:
      "https://img.shein.com/images/shein.com/201705/29/14955400943370387458_thumbnail_405x552.jpg",
    category2: "west",
    category1: "women"
  },
  {
    id: 3,
    name: "Brown Trouser",
    status: "Production",
    publisher: "John Dohia",
    date: "December 25 2009",
    url:
      "https://img.ltwebstatic.com/images2_pi/2018/09/20/15374216571404048699_thumbnail_405x552.jpg",
    category2: "cult",
    category1: "men"
  },
  {
    id: 4,
    name: "Red Trouser",
    status: "Production",
    publisher: "Utkarsh Arya",
    date: "August 15 2010",
    url:
      "https://img.ltwebstatic.com/images2_pi/2019/04/17/155548036891307857_thumbnail_405x552.jpg",
    category2: "west",
    category1: "men"
  },
  {
    id: 5,
    name: "Purple Shirt",
    status: "Draft",
    publisher: "John Dohia",
    date: "June 25 2009",
    url:
      "https://img.ltwebstatic.com/images2_pi/2019/05/30/15592023154009842115_thumbnail_405x552.jpg",
    category2: "west",
    category1: "men"
  }
];
setGlobal({
  mainData: data,
  key: 0,
  data: data,
  detail: "",
  current:"ds",
  filteredData: ""
});



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
    e.preventDefault();
    const newData = {
      id: this.state.designID,
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
    this.setState(prevState => ({
      fullData: [...prevState.fullData, newData],
      someData: newData
    }));
  };
  fetchCollection = data => {
    return <List data={data} />;
  };
  render() {
    console.log("stateeee", this.global);
    return (
      <>
        <div class='containerr'>
          <Header />
          <MainSider />
          <SecondSider />
          <MainContent />
        </div>
      </>
    );
  }
}
