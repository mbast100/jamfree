import { Grid } from "@material-ui/core";
import React from "react";
import NewAccount from "../NewAccount";
import WelcomeNav from "./Navigation";

export default function Welcome() {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <WelcomeNav/>
        </Grid>
        <Grid item>
          <h2>Welcome to</h2>
          <h1> JamFree</h1>
        </Grid>
        <Grid item>
          <NewAccount />
        </Grid>
      </Grid>
    </div>
  );
}
