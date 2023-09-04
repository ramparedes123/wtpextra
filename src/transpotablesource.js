export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "supplierid",
    headerName: "Supplier ID",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.supplierid}</div>;
    },
  },
  {
    field: "user",
    headerName: "Name",
    width: 230,
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
    field: "address",
    headerName: "Address",
    width: 230,
    renderCell: (params) => {
      return <div>{params.row.address}</div>;
    },
  },

  {
    field: "contact",
    headerName: "Contact Number",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.contact}</div>;
    },
  },
  {
    field: "review",
    headerName: "Review History",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.review}</div>;
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
    supplierid: "FD342K",
    username: "Angelo Madara",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "active",
    email: "1snow@gmail.com",
  },
  {
    id: 2,
    supplierid: "JF231K",
    username: "Jim Castro",
    email: "2snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "passive",
  },
  {
    id: 3,
    supplierid: "LK3452",
    username: "Elaine Bagsic",
    email: "3snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    supplierid: "AD1234",
    username: "Harold Llames",
    email: "4snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "pending",
    status: "active",
  },
  {
    id: 5,
    supplierid: "LI4563",
    username: "Anthony Naui",
    email: "5snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    supplierid: "VB4523",
    username: "Kevin Mendoza",
    email: "6snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 7,
    supplierid: "NE2343",
    username: "Ram Paredes",
    email: "7snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    supplierid: "FG4473",
    username: "Miguel Cabungcag",
    email: "8snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 9,
    supplierid: "QJ4343",
    username: "Christian Zano",
    email: "snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    supplierid: "HG6343",
    username: "JC Lazo",
    email: "snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
];
