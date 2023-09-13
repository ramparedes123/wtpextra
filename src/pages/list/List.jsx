import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";

import Datatable from "../../components/datatable/Datatable";
import ActivityList from "../../components/datatable/Roomlist/ActivityList";
import VoucherList from "../../components/datatable/Voucherlist/VoucherList";
import BookingList from "../../components/datatable/Booking/BookingList";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer p-3">
        <div
          className="py-4 px-2 "
          style={{ border: "1px solid #ddd", borderRadius: "10px" }}
        >
          <Tabs
            defaultActiveKey="Property"
            transition={false}
            id="fill-tab-example"
            fill
          >
            <Tab eventKey="Property" title="Property">
              <Datatable />
            </Tab>
            <Tab eventKey="Activities" title="Activities">
              <ActivityList />
            </Tab>
            <Tab eventKey="Voucher" title="Voucher">
              <VoucherList />
            </Tab>
            <Tab eventKey="Booking" title="Booking">
              <BookingList />
            </Tab>
            <Tab eventKey="transportation" title="Transportation">
              Tab content for Transpo
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default List;
