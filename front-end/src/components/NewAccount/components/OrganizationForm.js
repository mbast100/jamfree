import React, { useState } from "react";
import { TextField, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
}));
export default function OrganizationForm() {
  const classes = useStyles();
  const [restaurantName, setrRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <Grid container direction="column">
        <Grid item className={classes.item}>
          <TextField
            value={restaurantName}
            fullWidth
            variant="outlined"
            label="Restaurant Name"
          />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField value={email} fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField
            value={phoneNumber}
            fullWidth
            label="Phone Number"
            variant="outlined"
          />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField
            value={address}
            fullWidth
            label="Address"
            variant="outlined"
          />
        </Grid>
        <Grid item item className={classes.item}>
          <TextField
            value={password}
            fullWidth
            label="Password"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}
