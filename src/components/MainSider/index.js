import React, { Component, setGlobal } from "reactn";
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
export default class index extends Component {
  componentDidMount(){
    this.setGlobal({data:data})
  }
  fullCollection = () => {
    this.setGlobal({
      data: data
    });
  };
  sampling = () => {
    const filterdata = data.filter(elem => {
      return elem.status === "Sampling";
    });
    console.log("ssssampling", filterdata);
    this.setGlobal({
      data: filterdata
    });
  };
  draft = () => {
    const filterdata = data.filter(elem => {
      return elem.status === "Draft";
    });

    this.setGlobal({
      data: filterdata
    });
  };

  render() {
    return (
      <div class='side1 grid-area'>
        <div class='side1_top'>
          <div class='left_side_icons'>
            <img
              onClick={this.fullCollection}
              src='./assests/ic_nav_collections.svg'
              alt=""
            />
            <div>Collections</div>
          </div>

          <div class='left_side_icons'>
            <img onClick={this.sampling} src='./assests/ic_nav_sampling.svg'
            alt="" />
            <div>Sampling</div>
          </div>
          <div class='left_side_icons'>
            <img
              onClick={this.draft}
              src='./assests/ic_nav_production.svg'
              alt=""
            />
            <div>Production</div>
          </div>
          <div class='left_side_icons'>
            {" "}
            <img src='./assests/ic_nav_messages.svg' />
            <span class='badge'>23</span>
            <div>Inbox </div>
          </div>
        </div>
        <div class='side1_bottom'>
          <div class='left_side_icons'>
            <img src='./assests/ic_nav_account.svg' />
            <div>Account</div>
          </div>

          <div class='left_side_icons'>
            <i style={{ fontSize: "1.5rem" }} class='fas fa-cogs' />
            <div>Settings</div>
          </div>
          <div class='left_side_icons'>
            <i style={{ fontSize: "1.2rem" }} class='fas fa-sign-in-alt' />
            <div>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}
