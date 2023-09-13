export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "name",
    headerName: "Voucher Name",
    width: 180,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.vouchername}</div>;
    },
  },
  {
    field: "code",
    headerName: "Voucher Code",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.code}</div>;
    },
  },

  {
    field: "Desc",
    headerName: "Description",
    width: 250,
    renderCell: (params) => {
      return <div>{params.row.info}</div>;
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
    vouchername: "HOTELNOW",
    code: "HOTELNEW25",
    info: "Hotel 25% for new users",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 2,
    refno: "JF231K",
    vouchername: "YEYPAYDAY",
    code: "PAYDAY10",
    info: "Payday Promo this September to October",
    review: "Declined",
    status: "pending",
  },
  {
    id: 3,
    refno: "LK3452",
    vouchername: "STUDENTTREAT",
    code: "ST25",
    info: "Student Discount for any Activities Nationwide",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    refno: "AD1234",
    vouchername: "HOLIDAYLOVE",
    code: "HOLIDAY30",
    info: "Christmas Holiday promo for any booking",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 5,
    refno: "LI4563",
    vouchername: "BIRTHDAYPROMO",
    code: "HBD50",
    info: "Birthday Promo for September babies for hotel booking",
    review: "In-progress",
    status: "passive",
  },
];
