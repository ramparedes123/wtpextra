export const userColumns = [
  // { field: "id", headerName: "ID", width: 50 },
  {
    field: "date",
    headerName: "Check-in date",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.date}</div>;
    },
  },

  {
    field: "guest",
    headerName: "Guest",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.guest}</div>;
    },
  },
  {
    field: "refId",
    headerName: "Ref. ID",
    width: 90,
    renderCell: (params) => {
      return <div>{params.row.refid}</div>;
    },
  },
  {
    field: "rateplan",
    headerName: "Rate Plan",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.rateplan}</div>;
    },
  },
  {
    field: "bookingtype",
    headerName: "Booking Type",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.bookingtype}</div>;
    },
  },

  // {
  //   field: "usertype",
  //   headerName: "User Type",
  //   width: 160,
  //   renderCell: (params) => {
  //     return <div>{params.row.usertype}</div>;
  //   },
  // },

  {
    field: "voucher",
    headerName: "Voucher",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.voucher}</div>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
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
    refid: "2123",
    bookingtype: "Transportation",
    guest: "Angelo Madara",
    usertype: "Galago User",
    voucher: "TRP20%",
    date: "August 2, 2023",
    rateplan: "Event RP",
    status: "active",
  },
  {
    id: 2,
    refid: "5673",
    bookingtype: "Hotel",
    guest: "Jim Castro",
    usertype: "Galago User",
    voucher: "GLP20%",
    date: "August 2, 2023",
    rateplan: "Membership RP",
    status: "passive",
  },
  {
    id: 3,
    refid: "0083",
    bookingtype: "Flight",
    guest: "Elaine Bagsic",
    usertype: "Galago User",
    voucher: "FLT30%",
    date: "August 2, 2023",
    rateplan: "Government RP",
    status: "pending",
  },
  {
    id: 4,
    refid: "1632",
    bookingtype: "Hotel",
    guest: "Harold Llames",
    usertype: "Offline Booking",
    voucher: "GLP35%",
    date: "August 2, 2023",
    rateplan: "Student RP",
    status: "active",
  },
  {
    id: 5,
    refid: "0002",
    bookingtype: "Flight",
    guest: "Anthony Naui",
    usertype: "Facebook Booking",
    voucher: "FLT25%",
    date: "August 2, 2023",
    rateplan: "Special RP",
    status: "passive",
  },
  {
    id: 6,
    refid: "0884",
    bookingtype: "Transportation",
    guest: "Kevin Mendoza",
    usertype: "Galago User",
    voucher: "TRP50%",
    date: "August 2, 2023",
    rateplan: "Non-Ref RP",
    status: "active",
  },
  {
    id: 7,
    refid: "7853",
    bookingtype: "Hotel",
    guest: "Ram Paredes",
    usertype: "Partners",
    voucher: "GLP20%",
    date: "August 2, 2023",
    rateplan: "Flexible RP",
    status: "passive",
  },
  {
    id: 8,
    refid: "5789",
    bookingtype: "Activities",
    guest: "Miguel Cabungcag",
    usertype: "Partners",
    voucher: "No Voucher",
    date: "August 2, 2023",
    rateplan: "Adv. Purchasing RP",
    status: "active",
  },
  {
    id: 9,
    refid: "1737",
    bookingtype: "Cruise",
    guest: "Christian Zano",
    usertype: "Unknown",
    voucher: "No Voucher",
    date: "August 2, 2023",
    rateplan: "Breakfast RP",
    status: "pending",
  },
  {
    id: 10,
    refid: "9423",
    bookingtype: "Cruise",
    guest: "JC Lazo",
    usertype: "Unknown",
    voucher: "PSE Tower BGC TAGUIG",
    date: "August 2, 2023",
    rateplan: "Loyalty RP",
    status: "active",
  },
];
