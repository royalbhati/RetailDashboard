import React, { Component, useGlobal, setGlobal } from "reactn";

import Header from "../Header/";
import MainContent from "../MainContent";
import MainSider from "../MainSider";
import SecondSider from "../SecondarySider";

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
  current: "ds",
  filteredData: ""
});

export default class SiderDemo extends React.Component {
  render() {
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
