import React, { Component } from "react";
import QRCode from "qrcode.react";
import Cookies from "js-cookie";

export default class UserQrCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      id:''
    };
  }
  componentDidMount(){
    this.setState({value:Cookies.get('userId')})
  }
  render() {
    const { value} = this.state;
    return (
      <div style={{padding:"20px"}}>
        <QRCode size={200} value={value} />
      </div>
    );
  }
}
