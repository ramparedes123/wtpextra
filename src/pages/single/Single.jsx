import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/211184621.jpg?k=47ac9df751be10d6aeaa74401c284e4c8530ca9aae411a89b764595e85700d84&o=&hp=1"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h3 className="itemTitle">Hotel GalaGO!</h3>
                <div className="detailItem">
                  <span className="itemKey">Type:</span>
                  <span className="itemValue">Condominium</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">09447828123</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">PSE Tower BGC TAGUIG</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description</span>
                  <span className="itemValue">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, accusamus.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest Transactions</h1>
          {/* <List /> */}
        </div>
      </div>
    </div>
  );
};

export default Single;
