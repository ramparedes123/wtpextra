import "./BlogList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../blogtablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddBlog from "../../../pages/new/Blogs/AddBlog";
import EditProperty from "../../../pages/new/NewProperty/EditProperty";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { Switch } from "@mui/material";

const BlogList = () => {
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
    <div className="datatable">
      <div className="datatableTitle">
        <h3 className="fw-bold text-black">Blog List</h3>

        <AddBlog />
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default BlogList;
