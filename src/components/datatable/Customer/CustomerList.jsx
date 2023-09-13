import "./CustomerList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../usertablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddProperty from "../../../pages/new/NewProperty/AddProperty";
import EditProperty from "../../../pages/new/NewProperty/EditProperty";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { Switch } from "@mui/material";

const BookingList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <AiOutlineEye />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <MdOutlineDeleteOutline />
            </div>

            <EditProperty className="editButton" />
            <Switch />
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable py-5">
      <div className="datatableTitle">
        <h3 className="fw-bold text-black">Customers List</h3>

        <AddProperty />
      </div>
      <DataGrid
        className="datagrid "
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default BookingList;
