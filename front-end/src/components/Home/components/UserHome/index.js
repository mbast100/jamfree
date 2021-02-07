import React from "react";
import UserQrCode from "../../../UserQrCode";

export default function UserHome(props) {
  const { id, data } = props;
  return (
    <div>
      <h2>User</h2>
      <div>
        <UserQrCode id={id} />
      </div>
    </div>
  );
}
