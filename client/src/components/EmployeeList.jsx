import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable({ employeeList, setEmployeeList }) {
  useEffect(() => {
    axios.get("/employee").then((res) => {
      setEmployeeList(res.data);
    });
  }, []);

  const deleteItem = (idNo) =>{
    console.log("deleting")
    axios.delete(`/employee/${idNo}`).then(res=>{
      window.location.reload(false);
    })
  }

  const classes = useStyles();

  return (
    <>
      <h2 className="header">All Employees</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Date Of Joining</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((employee, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {employee.name}
                </TableCell>
                <TableCell align="right">{employee.name}</TableCell>
                <TableCell align="right">{employee.department}</TableCell>
                <TableCell align="right">{employee.designation}</TableCell>
                <TableCell align="right">{employee.dateOfJoining}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={()=>deleteItem(employee._id)} aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
