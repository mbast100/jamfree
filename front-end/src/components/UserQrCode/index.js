import React, { Component } from "react";
import QRCode from "qrcode.react";

export default class UserQrCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "https://github.com/kiro7kiro/jamfree",
    };
  }
  render() {
    const { value } = this.state;
    return (
      <div style={{padding:"20px"}}>
        <QRCode size={200} value={value} />
      </div>
    );
  }
}
