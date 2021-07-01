import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({ employee, setEmployee }) {
  const saveEmployee = () => {
    axios.post("/employee", employee).then((res) => {
      window.location.reload(false);
      console.log(res.data);
    });
    setEmployee("");
  };

  const classes = useStyles();

  return (
    <div>
      <h2 className="header">Create Employee</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          id="filled-basic"
          label="Name"
          variant="filled"
          value = {employee.name}
        />
        <br />
        <TextField
          onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
          id="filled-basic"
          label="Department"
          variant="filled"
          value = {employee.department}
        />
        <br />
        <TextField
          onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
          id="filled-basic"
          label="Designation"
          variant="filled"
          value = {employee.designation}
        />
        <br />
        <TextField
          onChange={(e) =>
            setEmployee({ ...employee, dateOfJoining: e.target.value })
          }
          id="filled-basic"
          label="dateOfJoining"
          variant="filled"
          value = {employee.dateOfJoining}
        />
      </form>
      <Button onClick={saveEmployee} variant="contained" color="primary">
        Create
      </Button>
    </div>
  );
}
