export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "bookingtype",
    headerName: "Booking Type",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.bookingtype}</div>;
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.date}</div>;
    },
  },

  {
    field: "usertype",
    headerName: "User Type",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.usertype}</div>;
    },
  },

  {
    field: "voucher",
    headerName: "Voucher",
    width: 120,
    renderCell: (params) => {
      return <div>{params.row.voucher}</div>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    bookingtype: "Hotel",
    username: "Angelo Madara",
    usertype: "Galago User",
    voucher: "GLP20%",
    date: "August 2, 2023",
    status: "active",
  },
  {
    id: 2,
    bookingtype: "Hotel",
    username: "Jim Castro",
    usertype: "Galago User",
    voucher: "GLP20%",
    date: "August 2, 2023",
    status: "passive",
  },
  {
    id: 3,
    bookingtype: "Flight",
    username: "Elaine Bagsic",
    usertype: "Galago User",
    voucher: "FLT30%",
    date: "August 2, 2023",
    status: "pending",
  },
  {
    id: 4,
    bookingtype: "Hotel",
    username: "Harold Llames",
    usertype: "Offline Booking",
    voucher: "GLP20",
    date: "August 2, 2023",
    status: "active",
  },
  {
    id: 5,
    bookingtype: "Flight",
    username: "Anthony Naui",
    usertype: "Facebook Booking",
    voucher: "FLT25%",
    date: "August 2, 2023",
    status: "passive",
  },
  {
    id: 6,
    bookingtype: "Transportation",
    username: "Kevin Mendoza",
    usertype: "Galago User",
    voucher: "TRP50%",
    date: "August 2, 2023",
    status: "active",
  },
  {
    id: 7,
    bookingtype: "Hotel",
    username: "Ram Paredes",
    usertype: "Partners",
    voucher: "GLP20%",
    date: "August 2, 2023",
    status: "passive",
  },
  {
    id: 8,
    bookingtype: "Activities",
    username: "Miguel Cabungcag",
    usertype: "Partners",
    voucher: "No Voucher",
    date: "August 2, 2023",
    status: "active",
  },
  {
    id: 9,
    bookingtype: "Cruise",
    username: "Christian Zano",
    usertype: "Unknown",
    voucher: "No Voucher",
    date: "August 2, 2023",
    status: "pending",
  },
  {
    id: 10,
    bookingtype: "Cruise",
    username: "JC Lazo",
    usertype: "Unknown",
    voucher: "PSE Tower BGC TAGUIG",
    date: "August 2, 2023",
    status: "active",
  },
];
