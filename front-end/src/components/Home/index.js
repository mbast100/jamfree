import React, { Component } from "react";
import UserHome from "./components/UserHome";
import Navigation from "./components/Navigation";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usetype: "",
    };
  }
  componentDidMount() {}
  render() {
    const { userType } = this.state;
    return (
      <div>
        <Navigation />
        <UserHome />
      </div>
    );
  }
}
