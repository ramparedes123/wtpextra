import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import ActivityList from "../../components/datatable/Roomlist/ActivityList";
import VoucherList from "../../components/datatable/Voucherlist/VoucherList";
import BookingList from "../../components/datatable/Booking/BookingList";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
        <ActivityList />
        <VoucherList />
        <BookingList />
      </div>
    </div>
  );
};

export default List;
