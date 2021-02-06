import React, { useState } from "react";
import { TextField, Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: "10px",
  },
}));

export default function OrganizationForm() {
  const classes = useStyles();
  const [restaurantName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (restaurantName && email && phoneNumber && password) {
      let data = {
        restaurant_name: restaurantName,
        email: email,
        address: address,
        phone_number: phoneNumber,
      };
      console.log("request data: ", data);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={submit}>
        <Grid container direction="column">
          <Grid item className={classes.item}>
            <TextField
              onChange={(event) => setRestaurantName(event.target.value)}
              value={restaurantName}
              fullWidth
              variant="outlined"
              label="Restaurant Name"
            />
          </Grid>
          <Grid item item className={classes.item}>
            <TextField
              type="email"
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
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              fullWidth
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item item className={classes.item}>
            <TextField
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              fullWidth
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item style={{ marginTop: "10px" }}>
            <Button onClick={submit} variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
