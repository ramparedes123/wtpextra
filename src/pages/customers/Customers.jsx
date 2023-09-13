import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Customers.scss";

import CustomerList from "../../components/datatable/Customer/CustomerList";

const Customers = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <CustomerList />
      </div>
    </div>
  );
};

export default Customers;
