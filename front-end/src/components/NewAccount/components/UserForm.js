import { TextField, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
}));
export default function UserForm() {
  const classes = useStyles();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <div style={{ padding: "20px" }}>
      <Grid container direction="column">
        <Grid item className={classes.item}>
          <TextField
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            fullWidth
            variant="outlined"
            label="First Name"
          />
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            fullWidth
            variant="outlined"
            label="Last Name"
          />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            fullWidth
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
            fullWidth
            label="Phone Number"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}
