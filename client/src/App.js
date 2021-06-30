import "./App.css";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> <h1>Employees Create & Show</h1></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><EmployeeList /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><CreateEmployee /></Paper>
        </Grid>
      </Grid>
       
        
        
      </Container>
    </div>
  );
}

export default App;
