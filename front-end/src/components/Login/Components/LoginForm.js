import React, { useState } from "react";
import { TextField, Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email && password) {
      let data = {
        Email: email,
        Password: password,
      };
      console.log("request data: ", data); // CHANGE TO RETRIEVE PASSWORD AND EMAIL
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={login}>
        <Grid container direction="column">
          <Grid item className={classes.item}>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              fullWidth
              variant="outlined"
              label="Email"
            />
          </Grid>
          <Grid item item className={classes.item}>
            <TextField
              type="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              fullWidth
              variant= "outlined"
              label="Password"
            />
            </Grid>
            <Grid item style={{ marginTop: "10px" }}>
            <Button onClick={login} variant="contained" color="primary">
             Sign-in
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

}
