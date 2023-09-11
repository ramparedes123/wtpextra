import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
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
            count="1674"
            link="/inventory"
            see="see all properties"
            percentage="34"
          />
          <Widgett
            title="TRANSPORTATION"
            count="252"
            link="/inventory"
            see="see all transportation"
            percentage="12"
          />
          <Widgett
            title="ACTIVITIES"
            count="67"
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
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
