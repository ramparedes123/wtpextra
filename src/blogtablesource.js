export const userColumns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   {
  //     field: "supplierid",
  //     headerName: "Supplier ID",
  //     width: 100,
  //     renderCell: (params) => {
  //       return <div>{params.row.supplierid}</div>;
  //     },
  //   },
  {
    field: "blogtitle",
    headerName: "Blog Title",
    width: 550,
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
    field: "publisher",
    headerName: "Publisher",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.publisher}</div>;
    },
  },

  {
    field: "review",
    headerName: "Review",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.review}</div>;
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
    supplierid: "FD342K",
    username: "Davao's best coffee shop",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "In-progress",
    status: "active",
    email: "1snow@gmail.com",
  },
  {
    id: 2,
    supplierid: "JF231K",
    username: "Discovering the Enigmatic Galago: A Wildlife Safari Adventure",
    email: "2snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Declined",
    status: "passive",
  },
  {
    id: 3,
    supplierid: "LK3452",
    username: "Galago Encounters: Exploring Madagascar's Unique Primates",
    email: "3snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    supplierid: "AD1234",
    username: "Into the Wild: Tracking Galagos in African Rainforests",
    email: "4snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Pending",
    status: "active",
  },
  {
    id: 5,
    supplierid: "LI4563",
    username: "Galago Tales: A Journey Through the World of Night Primates",
    email: "5snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    supplierid: "VB4523",
    username: "Galago Safari: Witnessing Nocturnal Wonders in Tanzania",
    email: "6snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 7,
    supplierid: "NE2343",
    username: "Galago Conservation: Preserving Madagascar's Hidden Treasures",
    email: "7snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    supplierid: "FG4473",
    username: "Galago Galore: Exploring the Biodiversity of the Rainforest",
    email: "8snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 9,
    supplierid: "QJ4343",
    username: "In Search of Galagos: A Nighttime Adventure in the Amazon",
    email: "snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    supplierid: "HG6343",
    username: "JGalago Whispers: Unveiling the Secrets of These Tiny Primates",
    email: "snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
  {
    id: 11,
    supplierid: "HG6343",
    username: "JGalago Whispers: Unveiling the Secrets of These Tiny Primates",
    email: "snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
  {
    id: 12,
    supplierid: "HG6343",
    username: "JGalago Whispers: Unveiling the Secrets of These Tiny Primates",
    email: "snow@gmail.com",
    publisher: "Belle Mapa",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
];
