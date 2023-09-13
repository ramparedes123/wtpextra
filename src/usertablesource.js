export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },

  {
    field: "Customer",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      return <div>{params.row.name}</div>;
    },
  },
  {
    field: "Origin",
    headerName: "Login Origin",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithOrigin ${params.row.origin}`}>
          {params.row.origin}
        </div>
      );
    },
  },
  {
    field: "type",
    headerName: "User type",
    width: 100,
    renderCell: (params) => {
      return <div>{params.row.type}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.email}</div>;
    },
  },

  {
    field: "contact",
    headerName: "Contact Number",
    width: 180,
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
    name: "Maria Santos",
    origin: "GalaGO",
    address: "123 Ocean Drive, Manila, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "active",
    email: "1snow@gmail.com",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    origin: "Extranet",
    email: "2snow@gmail.com",
    address: "Station 1, Boracay Island, Philippines",
    contact: " 09447828123",
    type: "Partner",
    status: "active",
  },
  {
    id: 3,
    name: "Lorna Magbanua",
    origin: "WalkThePlanet",
    email: "3snow@gmail.com",
    address: "456 Mango Street, Cebu City, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "active",
  },
  {
    id: 4,
    name: "Andres Reyes",
    origin: "GalaGO",
    email: "4snow@gmail.com",
    address: "El Nido, Palawan, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "active",
  },
  {
    id: 5,
    name: "Carmela Garcia",
    origin: "GalaGO",
    email: "5snow@gmail.com",
    address: "789 Pine Tree Road, Baguio City, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "passive",
  },
  {
    id: 6,
    name: "Ricardo Cruz",
    origin: "WalkThePlanet",
    email: "6snow@gmail.com",
    address: "Alona Beach, Panglao, Bohol, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "active",
  },
  {
    id: 7,
    name: "Emily Fernandez",
    origin: "Extranet",
    email: "7snow@gmail.com",
    address: "101 Orchid Street, Davao City, Philippines",
    contact: " 09447828123",
    type: "Partner",
    status: "passive",
  },
  {
    id: 8,
    name: "Gabriel Lim",
    origin: "Extranet",
    email: "8snow@gmail.com",
    address: "Tagaytay City, Cavite, Philippines",
    contact: " 09447828123",
    type: "Partner",
    status: "active",
  },
  {
    id: 9,
    name: "Teresa Lopez",
    origin: "GalaGO",
    email: "snow@gmail.com",
    address: "Waterfront Road, Subic Bay Freeport Zone, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "pending",
  },
  {
    id: 10,
    name: "Manuel Tan",
    origin: "GalaGO",
    email: "snow@gmail.com",
    address: "Coron, Palawan, Philippines",
    contact: " 09447828123",
    type: "User",
    status: "active",
  },
];
