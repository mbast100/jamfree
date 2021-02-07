import React, { useState } from "react";
import { TextField, Grid, makeStyles, Button, Backdrop } from "@material-ui/core";
import api from "../../../api";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    if (email && password) {
      let data = {
        email: email,
        password: password,
      };
      api.login(data).then((res) => {
        if(res.status === 200){
          setLoading(false);
          history.push('/home');
        }
      })
    }
  };
  const loader = loading && <Backdrop/>
  return (
    <div style={{ padding: "20px" }}>
      {loader}
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
