import React from "react";
import LoginForm from "./Components/LoginForm";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    backgroundColor: "#F8F8F8",
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div style={{marginTop:"200px"}}>
      <Card className={classes.root}>
        <h1>LOGIN</h1>
        <LoginForm />
      </Card>
    </div>
  );
}
