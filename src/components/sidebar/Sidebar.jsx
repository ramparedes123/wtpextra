import "./sidebar.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

// react icons
import { RxDashboard } from "react-icons/rx";
import { IoTicketOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { AiOutlineGitlab } from "react-icons/ai";
import { BsPersonGear } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { PiPackageLight } from "react-icons/pi";
import { PiTicket } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { LiaBlogger } from "react-icons/lia";
import { LuCoins } from "react-icons/lu";

// images
import Logo from "../../Assets/logoblack.png";
import wtp from "../../Assets/WTP.svg";
import gally from "../../Assets/gally.png";

const Sidebar = () => {
  return (
    <div className="sidebar py-3">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={Logo} alt="" width={150} />
          </span>
        </Link>
      </div>

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <RxDashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineInventory className="icon" />
              <span>Inventory</span>
            </li>
          </Link>
          <p className="title">OpsTeam</p>
          <hr />

          <Link to="/booking" style={{ textDecoration: "none" }}>
            <li>
              <IoTicketOutline className="icon" />
              <span>Booking</span>
            </li>
          </Link>

          <li>
            <BsCardChecklist className="icon" />
            <span>Reports</span>
          </li>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <BsPersonGear className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <p className="title">Partners</p>
          <hr />

          <Link to="/partners" style={{ textDecoration: "none" }}>
            <li>
              <BiStats className="icon" />
              <span>Partner Stats</span>
            </li>
          </Link>
          <p className="title">Pricing Manager</p>
          <Link to="/logs" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineGitlab className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <p className="title">Websites</p>
          <hr />
          <a href="https://galago.com.ph" style={{ textDecoration: "none" }}>
            <li>
              <img
                src={gally}
                alt=""
                width={20}
                className="m-0 p-0"
                style={{ filter: "grayscale(100%)" }}
              />
              <span>GalaGO!</span>
            </li>
          </a>
          <a
            href="https://www.walktheplanet.com"
            style={{ textDecoration: "none" }}
          >
            <li>
              <img
                src={wtp}
                alt=""
                width={20}
                className="m-0 p-0"
                style={{ filter: "grayscale(100%)" }}
              />
              <span>WalkThePlanet</span>
            </li>
          </a>
          <p className="title">CMS</p>
          <hr />
          <li>
            <IoTicketOutline className="icon" />
            <span>Booking</span>
          </li>
          <li>
            <PiPackageLight className="icon" />
            <span>Packages</span>
          </li>
          <li>
            <PiTicket className="icon" />
            <span>Vouchers</span>
          </li>
          <li>
            <LuCoins className="icon" />
            <span>Rates</span>
          </li>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <li>
              <LiaBlogger className="icon" />
              <span>Blogs</span>
            </li>
          </Link>
          <li>
            <RiPagesLine className="icon" />
            <span>Pages</span>
          </li>

          <p className="title">User</p>
          <hr />
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <AiOutlineLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
