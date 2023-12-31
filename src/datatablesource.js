export const userColumns = [
  // { field: "id", headerName: "ID", width: 50 },
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
    width: 140,
    renderCell: (params) => {
      return <div>{params.row.propertytype}</div>;
    },
  },
  {
    field: "propertyowner",
    headerName: "Owner",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.owner}</div>;
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 350,
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
    owner: "Peakview Properties Ltd.",
    address: "123 Ocean Drive, Manila, Philippines",
    contact: " 09447828123",
    review: "In-progress",
    status: "active",
    email: "1snow@gmail.com",
  },
  {
    id: 2,
    supplierid: "JF231K",
    propertytype: "Condominium",
    owner: "Horizon Estates",
    email: "2snow@gmail.com",
    address: "Station 1, Boracay Island, Philippines",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 3,
    supplierid: "LK3452",
    propertytype: "Condominium",
    owner: "Coastal Realty",
    email: "3snow@gmail.com",
    address: "456 Mango Street, Cebu City, Philippines",
    contact: " 09447828123",
    review: "In-progress",
    status: "active",
  },
  {
    id: 4,
    supplierid: "AD1234",
    propertytype: "Hotel",
    owner: "Golden Gate Properties",
    email: "4snow@gmail.com",
    address: "El Nido, Palawan, Philippines",
    contact: " 09447828123",
    review: "pending",
    status: "active",
  },
  {
    id: 5,
    supplierid: "LI4563",
    propertytype: "Trench House",
    owner: "Vista Homes",
    email: "5snow@gmail.com",
    address: "789 Pine Tree Road, Baguio City, Philippines",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 6,
    supplierid: "VB4523",
    propertytype: "Duplex House",
    owner: "Vista Homes",
    email: "6snow@gmail.com",
    address: "Alona Beach, Panglao, Bohol, Philippines",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 7,
    supplierid: "NE2343",
    propertytype: "Town House",
    owner: "Palm Grove Estates",
    email: "7snow@gmail.com",
    address: "101 Orchid Street, Davao City, Philippines",
    contact: " 09447828123",
    review: "In-progress",
    status: "passive",
  },
  {
    id: 8,
    supplierid: "FG4473",
    propertytype: "Apartment",
    owner: "Riverfront Realty",
    email: "8snow@gmail.com",
    address: "Tagaytay City, Cavite, Philippines",
    contact: " 09447828123",
    review: "Declined",
    status: "active",
  },
  {
    id: 9,
    supplierid: "QJ4343",
    propertytype: "Villa",
    owner: "Emerald Heights",
    email: "snow@gmail.com",
    address: "Waterfront Road, Subic Bay Freeport Zone, Philippines",
    contact: " 09447828123",
    review: "In-progress",
    status: "pending",
  },
  {
    id: 10,
    supplierid: "HG6343",
    propertytype: "Commercial Property",
    owner: "Summit Properties",
    email: "snow@gmail.com",
    address: "Coron, Palawan, Philippines",
    contact: " 09447828123",
    review: "Passed",
    status: "active",
  },
];
