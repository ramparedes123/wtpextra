import "./VoucherList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../activitytablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddProperty from "../../../pages/new/NewProperty/AddProperty";
import EditProperty from "../../../pages/new/NewProperty/EditProperty";
import AddActivity from "../../../pages/new/NewActivity/AddActivity";
import EditActivity from "../../../pages/new/NewActivity/EditActivity";
import AddVoucher from "../../../pages/new/Voucher/NewVoucher";

const VoucherList = () => {
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
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>

            <EditActivity className="editButton" />
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable py-5">
      <div className="datatableTitle">
        <h3 className="fw-bold text-black">Voucher List</h3>
        <AddVoucher />
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default VoucherList;
