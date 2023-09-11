import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BookingList from "../../components/datatable/Booking/BookingList";

const Booking = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <BookingList />
      </div>
    </div>
  );
};

export default Booking;
