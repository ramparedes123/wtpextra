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
          {params.row.activityname}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
    renderCell: (params) => {
      return <div>{params.row.address}</div>;
    },
  },

  {
    field: "contact",
    headerName: "Contact Number",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.contactno}</div>;
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
    activityname: "Island Hopping Adventure",
    contactperson: "Maria Santos",
    address: "Coron Town Proper, Coron, Palawan, Philippines",
    contactno: "+63 123 456 7890",
    review: "In-progress",
    status: "active",
  },
  {
    id: 2,
    supplierid: "JF231K",
    activityname: "Scuba Diving Expedition",
    contactperson: "Luis Hernandez",
    address: "Tubbataha Reefs Natural Park, Sulu Sea, Philippines",
    contactno: "+63 987 654 3210",
    review: "Declined",
    status: "passive",
  },
  {
    id: 3,
    supplierid: "LK3452",
    activityname: "Mayon Volcano Trekking",
    contactperson: "Juanita Garcia",
    address: "Mayon Volcano Natural Park, Bicol Region, Philippines",
    contactno: "+63 234 567 8901",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 4,
    supplierid: "AD1234",
    activityname: "Whale Shark Watching",
    contactperson: "Ricardo Santos",
    address: "Tan-awan, Oslob, Cebu, Philippines",
    contactno: "+63 345 678 9012",
    review: "pending",
    status: "active",
  },
  {
    id: 5,
    supplierid: "LI4563",
    activityname: "Chocolate Hills ATV Tour",
    contactperson: "Sofia Ramirez",
    address: "Chocolate Hills Adventure Park, Carmen, Bohol, ",
    contactno: "+63 456 789 0123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    supplierid: "VB4523",
    activityname: " Surfing Lessons",
    contactperson: "Miguel Cruz",
    address: "Cloud 9, General Luna, Siargao Island, Philippines",
    contactno: "+63 567 890 1234",
    review: "Declined",
    status: "active",
  },
  {
    id: 7,
    supplierid: "NE2343",
    activityname: " Underground River Cruise",
    contactperson: "Elena Martinez",
    address: "Sabang, Puerto Princesa, Palawan, Philippines",
    contactno: "+63 678 901 2345",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    supplierid: "FG4473",
    activityname: "Banaue Rice Terraces Tour",
    contactperson: "Carlos Fernandez",
    address: "Banaue Rice Terraces, Banaue, Ifugao, Philippines",
    contactno: "+63 789 012 3456",
    review: "Declined",
    status: "active",
  },
  {
    id: 9,
    supplierid: "QJ4343",
    activityname: "Pagsanjan Falls Canoeing",
    contactperson: "Andrea Lopez",
    address: "Pagsanjan Falls, Pagsanjan, Laguna, Philippines",
    contactno: "+63 890 123 4567",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    supplierid: "HG6343",
    activityname: "Tarsier Sanctuary Visit",
    contactperson: "Eduardo Cruz",
    address: "Tarsier Conservation Area, Corella, Bohol, Philippines",
    contactno: "+63 901 234 5678",
    review: "Passed",
    status: "active",
  },
];
