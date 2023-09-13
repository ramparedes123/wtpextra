import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Logs.scss";

import Table from "../../components/table/Table";

const Logs = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <h1>Logs</h1>
        </div>

        <div className="charts">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Logs;
