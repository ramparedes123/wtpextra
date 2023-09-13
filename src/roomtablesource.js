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
    field: "roomname",
    headerName: "Room Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.roomname}
        </div>
      );
    },
  },
  {
    field: "publisher",
    headerName: "Owner",
    width: 210,
    renderCell: (params) => {
      return <div>{params.row.owner}</div>;
    },
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.type}</div>;
    },
  },

  {
    field: "review",
    headerName: "Review",
    width: 140,
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
    supplierid: "H001",
    roomname: "Cozy Retreat Suite",
    owner: "Serenity Hotels & Resorts",
    email: "2snow@gmail.com",
    contact: "+1 (555) 123-4567",
    review: "In-progress",
    status: "active",
    type: "Deluxe",
  },
  {
    id: 2,
    supplierid: " H002",
    roomname: "Serene Oasis Room",
    email: "2snow@gmail.com",
    owner: "Horizon Hospitality Group",
    contact: "+1 (555) 987-6543",
    review: "Declined",
    type: "Presidential",
    status: "passive",
  },
  {
    id: 3,
    supplierid: " H003",
    roomname: "Deluxe Harbor View Suite",
    email: "3snow@gmail.com",
    owner: "Nature's Haven Hotels",
    contact: "+1 (555) 789-0123",
    review: "In-progress",
    type: "Deluxe",
    status: "pending",
  },
  {
    id: 4,
    supplierid: " H004",
    roomname: "Tranquil Garden Hideaway",
    email: "4snow@gmail.com",
    owner: "Riverside Resorts Inc.",
    contact: "+1 (555) 345-6789",
    review: "Pending",
    type: "Deluxe",
    status: "active",
  },
  {
    id: 5,
    supplierid: " H005",
    roomname: "Sunset Horizon Penthouse",
    email: "5snow@gmail.com",
    owner: "Peakview Properties Ltd.",
    contact: "+1 (555) 876-5432",
    review: "In-progress",
    type: "Premium",
    status: "passive",
  },
  {
    id: 6,
    supplierid: " H006",
    roomname: "Cozy Cottage Retreat",
    email: "cottageowner@email.com",
    owner: "Peakview Properties Ltd.",
    contact: "+1 (555) 123-4567",
    review: "In-progress",
    type: "Cabin",
    status: "No-Booking",
  },
  {
    id: 7,
    supplierid: " H007",
    roomname: "Urban Chic Apartment",
    email: "apartmentowner@email.com",
    owner: "Peakview Properties Ltd.",
    contact: "+1 (555) 987-6543",
    review: "In-progress",
    type: "Apartment",
    status: "No-Booking",
  },
  {
    id: 8,
    supplierid: " H008",
    roomname: "Beachfront Villa Paradise",
    email: "villaparadise@email.com",
    owner: "Peakview Properties Ltd.",
    contact: "+1 (555) 789-1234",
    review: "In-progress",
    type: "Villa",
    status: "No-Booking",
  },
];
