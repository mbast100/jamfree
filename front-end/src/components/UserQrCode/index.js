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
    this.setState({id:this.props.id})
    this.setState({value:Cookies.get('userId')})
  }
  render() {
    const { value , id} = this.state;
    return (
      <div style={{padding:"20px"}}>
        <QRCode size={200} value={value+id} />
      </div>
    );
  }
}
