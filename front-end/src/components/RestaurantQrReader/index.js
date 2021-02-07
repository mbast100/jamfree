import { Backdrop, Button, CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import QrReader from "react-qr-reader";
import api from "../../api";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export default class RestaurantQrReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      loading: false,
      response: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let response = [];
    console.log("vefore: ", this.state.result);
    if (Cookies.get("userId") === "fzsevy8kkuxfzfs") {
      api.getUsers(this.state.result[0]).then((res) => {
        if (res.status === 200) {
          let dataSquare = {
            email_address: res.data[0].email,
            family_name: res.data[0].last_name,
            given_name: res.data[0].first_name,
            phone_number: res.data[0].phone_number,
            reference_id: this.state.result[0],
          };
          api
            .addUserToSquare(dataSquare)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => alert(err));
        }
      });
    } else {
      this.setState({ loading: true });
      this.state.result.map((item) => {
        let data = { id: item, group_id: uuidv4() };
        api
          .createUserForOrganization(Cookies.get("userId"), data)
          .then((res) => {
            response.push(res.status);
          });
      });
      this.setState({ loading: false });
      console.log("response: ", response);
    }
  }
  handleScan = (data) => {
    alert(data)
    if (data) {
      let newResult = this.state.result;
      console.log("data: ", data)
      if (this.state.result.length === 0) {
        this.setState({
          result: [data],
        });
      } else if (newResult.indexOf(data) === -1) {
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
        <p>{result}</p>
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
