import "./App.css";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    designation: "",
    dateOfJoining: "",
  });

  const [employeeList, setEmployeeList] = useState([]);

  const classes = useStyles();
  return (
    <div className="App">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} className="navPadding">
              <h1 className="header">Employees Create & Show</h1>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <EmployeeList employeeList={employeeList} setEmployeeList={setEmployeeList}/>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <CreateEmployee employee={employee} setEmployee={setEmployee} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
