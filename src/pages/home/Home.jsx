import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Widgett from "../../components/widget/Widgett";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgett
            title="PROPERTY"
            count="10,674"
            link="/inventory"
            see="see all properties"
            percentage="34"
          />
          <Widgett
            title="TRANSPORTATION"
            count="6,652"
            link="/inventory"
            see="see all transportation"
            percentage="12"
          />
          <Widgett
            title="ACTIVITIES"
            count="1,934"
            link="/inventory"
            see="see all activities"
            percentage="65"
          />
          <Widgett
            title="USER"
            count="10,423"
            link="/inventory"
            see="see all users"
            percentage="99"
          />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          <Featured />
        </div>
        <h2 className="p-3">Recent Activity</h2>
        <div className="charts">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
