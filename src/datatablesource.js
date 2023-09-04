export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "supplierid",
    headerName: "Supplier ID",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.supplierid}</div>;
    },
  },
  {
    field: "propertytype",
    headerName: "Type",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.propertytype}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.address}</div>;
    },
  },

  {
    field: "contact",
    headerName: "Contact Number",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.contact}</div>;
    },
  },
  {
    field: "review",
    headerName: "Review History",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithReview ${params.row.review}`}>
          {params.row.review}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
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
    propertytype: "Condominium",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "active",
    email: "1snow@gmail.com",
  },
  {
    id: 2,
    supplierid: "JF231K",
    propertytype: "Condominium",
    email: "2snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "passive",
  },
  {
    id: 3,
    supplierid: "LK3452",
    propertytype: "Condominium",
    email: "3snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    supplierid: "AD1234",
    propertytype: "Hotel",
    email: "4snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "pending",
    status: "active",
  },
  {
    id: 5,
    supplierid: "LI4563",
    propertytype: "Trench House",
    email: "5snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    supplierid: "VB4523",
    propertytype: "Duplex House",
    email: "6snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 7,
    supplierid: "NE2343",
    propertytype: "Town House",
    email: "7snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    supplierid: "FG4473",
    propertytype: "Apartment",
    email: "8snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 9,
    supplierid: "QJ4343",
    propertytype: "Villa",
    email: "snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    supplierid: "HG6343",
    propertytype: "Commercial Property",
    email: "snow@gmail.com",
    address: "PSE Tower BGC TAGUIG",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
];
