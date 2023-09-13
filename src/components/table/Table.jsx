import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 14573434,
      category: "Partners",
      activitytype: "Reset Password",
      user: "Gum Bolaya",
      date: "2023-09-21 10:15:00",
      description: "Password Reset and Recovery",
      actions: "Reset Password",
      notes: "Password Reset using Email Auth",
    },
    {
      id: 13461213,
      category: "Transportation",
      activitytype: "Login",
      user: "John Smith",
      date: "2023-09-12 08:30:00",
      description: "User logged in",
      actions: "View Details",
      notes: "Successful login from IP: 192.168.1.1",
    },
    {
      id: 8074534,
      category: "Voucher",
      activitytype: "Adding New Voucher",
      user: "Joanna DC",
      date: "2023-09-12 11:45:00",
      description: "New voucher created",
      actions: "Add Voucher",
      notes: "Voucher created with name: SPT25%",
    },
    {
      id: 34512672,
      category: "Activities",
      activitytype: "Booking",
      user: "Christian Mae",
      date: "2023-09-12 13:20:00",
      description: "Taal Volcano Scuba Diving",
      actions: "Payment processed",
      notes: "Paid amount: $250",
    },
    {
      id: 1789562,
      category: "Security",
      activitytype: "Login",
      user: "Unknown",
      date: "	2023-09-12 14:55:00",
      description: "Failed login attempt",
      actions: "Block User",
      notes: "Multiple failed attempts",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Activity Type</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Actions</TableCell>
            <TableCell className="tableCell">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.category}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{row.activitytype}</div>
              </TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.description}</TableCell>
              <TableCell className="tableCell">{row.actions}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.notes}`}>{row.notes}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
