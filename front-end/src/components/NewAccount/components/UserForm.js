import { TextField, Grid, makeStyles, Button } from "@material-ui/core";
import React from "react";
import api from "../../../api";
import { useHistory } from "react-router-dom";

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
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const submit = () => {
    if (firstName && lastName && email && phoneNumber) {
      let data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
      };
      api.newUserAccount(data).then((res) => {
        console.log(res.data)
      })
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <form>
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
          <Grid item item className={classes.item}>
            <TextField
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              fullWidth
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item style={{ marginTop: "20px" }}>
            <Button onClick={submit} onClick={()=>history.push('/login')} variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
