import React, { Component } from "react";
import QRCode from "qrcode.react";

export default class UserQrCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "http://localhost:3001/api/users/",
      id:''
    };
  }
  componentDidMount(){
    this.setState({id:this.props.id})
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
