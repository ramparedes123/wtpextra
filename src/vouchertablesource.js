export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "reference number",
    headerName: "Ref No.",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.supplierid}</div>;
    },
  },
  {
    field: "name",
    headerName: "Voucher Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.vouchername}
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
    refno: "FD342K",
    vouchername: "Angelo Madara",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 2,
    refno: "JF231K",
    vouchername: "Jim Castro",
    review: "Declined",
    status: "Inactive",
  },
  {
    id: 3,
    refno: "LK3452",
    vouchername: "Elaine Bagsic",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    refno: "AD1234",
    vouchername: "Harold Llames",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 5,
    refno: "LI4563",
    vouchername: "Anthony Naui",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    refno: "VB4523",
    vouchername: "Kevin Mendoza",
    review: "Declined",
    status: "actiInactiveve",
  },
  {
    id: 7,
    refno: "NE2343",
    vouchername: "Ram Paredes",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    refno: "FG4473",
    vouchername: "Miguel Cabungcag",
    review: "Declined",
    status: "Inactive",
  },
  {
    id: 9,
    refno: "QJ4343",
    vouchername: "Christian Zano",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    refno: "HG6343",
    vouchername: "JC Lazo",
    review: "Passed",
    status: "active",
  },
];
