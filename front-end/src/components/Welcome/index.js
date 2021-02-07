import { Grid } from "@material-ui/core";
import React from "react";
import NewAccount from "../NewAccount";

export default function Welcome() {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <h1>Welcome to free Jam</h1>
        </Grid>
        <Grid item>
          <NewAccount />
        </Grid>
      </Grid>
    </div>
  );
}
