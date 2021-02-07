import React, { useState } from "react";
import {
  TextField,
  Grid,
  makeStyles,
  Button,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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
        if (res.status === 200) {
          setLoading(false);
          Cookies.set('userId', res.data.body.id)
          Cookies.set('userType', res.data.type)

          history.push("/home");
        }
      });
    }
  };

  const loader = loading && (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );

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
              variant="outlined"
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
