import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      <div>
          <h2 className = "header">Create Employee</h2>
    <form className={classes.root} noValidate autoComplete="off">
       <TextField id="filled-basic" label="Registration No." variant="filled" /><br/>
       <TextField id="filled-basic" label="Name" variant="filled" /><br/>
       <TextField id="filled-basic" label="Grade" variant="filled" /><br/>
       <TextField id="filled-basic" label="Section" variant="filled" />
      </form>
      <Button variant="contained" color="primary">
        Create
      </Button>
      </div>
  );
}



