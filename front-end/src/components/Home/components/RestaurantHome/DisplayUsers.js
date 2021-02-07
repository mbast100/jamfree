import React, { useEffect } from "react";
import api from "../../../../api";
import Cookies from "js-cookie";

export default function DisplayUsers() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    api.getUsers(Cookies.get("userId")).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, []);
  return <div></div>;
}
