import React, { Component } from "react";
import UserHome from "./components/UserHome";
import Navigation from "./components/Navigation";
import RestaurantHome from "./components/RestaurantHome";

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
        <h2>Resto</h2>
        <UserHome id={this.state.id} />
        <h1>Resto</h1>
        <RestaurantHome/>
      </div>
    );
  }
}
