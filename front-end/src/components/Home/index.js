import React, { Component } from "react";
import UserHome from "./components/UserHome";
import Navigation from "./components/Navigation";
import RestaurantHome from "./components/RestaurantHome";
import api from "../../api";
import Cookies from "js-cookie";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usertype: "",
      data:""
    };
  }
  componentDidMount() {
    api.getUsers(Cookies.get('userId')).then((res) =>{
      if(res.status === 200){
        this.setState({data:res.data.body});
      }
    })
    this.setState({userType:Cookies.get('userType')})
  }
  render() {
    const { userType, data } = this.state;
    const UserHomePage = (userType === "user") && (<UserHome data={data}  />)
    const OrgHomePage = (userType === "organization") && (<RestaurantHome/>)

    return (
      <div>
        <Navigation />
        {UserHomePage}
        {OrgHomePage}
      </div>
    );
  }
}
