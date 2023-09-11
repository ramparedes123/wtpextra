import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import RoomList from "../../components/datatable/Room/RoomList";

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
                <h3 className="itemTitle">
                  <h2 className="fw-bold">Peakview Properties Ltd.</h2>
                </h3>

                <div className="detailItem">
                  <span className="itemKey">Contact No.</span>
                  <span className="itemValue">+1 (555) 876-5432</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    123 Mountain Ridge Road Suite 201 Peakville, CA 12345 United
                    States
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description</span>
                  <span className="itemValue">
                    Peakview Properties Ltd. is a premier hospitality company
                    nestled in the picturesque mountains of Peakville,
                    California. Our property offers breathtaking mountain views
                    and a tranquil atmosphere that's perfect for both leisure
                    and business travelers. With a wide range of accommodations,
                    including the luxurious Mountain View Chalet, we strive to
                    provide our guests with an unforgettable experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={2 / 1}
              title="Property Transaction ( Last 6 Months)"
            />
          </div>
        </div>

        <RoomList />
      </div>
    </div>
  );
};

export default Single;
