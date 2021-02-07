import { Backdrop, Button, CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import api from "../../api";
import Cookies from "js-cookie";

export default class RestaurantQrReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.state.result.map((item) => {
      api.createUserForOrganization(Cookies.get("userId"));
    });
  }
  handleScan = (data) => {
    if (data) {
      let newResult = this.state.result;
      if (newResult.indexOf(data) === -1) {
        newResult.push(data);
      }
      this.setState({
        result: newResult,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    const { result, loading } = this.state;
    const loader = loading && (
      <Backdrop>
        <CircularProgress />
      </Backdrop>
    );
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        {result.map((item, index) => (
          <p>{item}</p>
        ))}
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}
