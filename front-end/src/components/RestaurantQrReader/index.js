import { Backdrop, Button, CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import api from "../../api";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from 'uuid';

export default class RestaurantQrReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      loading: false,
      response:[],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let response = []

    this.setState({loading:true})
    this.state.result.map((item) => {
      let data = {id: item, group_id: uuidv4()}
      api.createUserForOrganization(Cookies.get("userId"), data).then((res) => {
        response.push(res.status)
      });
    });
    this.setState({loading:false});
    console.log("response: ", response)
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
        {loader}
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        {result.map((item, index) => (
          <p>{item}</p>
        ))}
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
