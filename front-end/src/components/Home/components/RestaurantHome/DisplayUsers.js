import React, { useEffect } from "react";
import api from "../../../../api";
import Cookies from "js-cookie";
import { CircularProgress } from "@material-ui/core";

export default function DisplayUsers() {

  const [loading, setLoading] = React.useState(false);
  const [temp, setTemp] = React.useState('')
  useEffect(() => {
    api.getUsersForOrganizations(Cookies.get("userId")).then((res) => {
      console.log(res)
      if (res.status === 200) {
        setTemp(res.data);
      }
    });
  }, []);

  if (!temp) {
    return <CircularProgress />
  }
  return (
    <div>
      {temp.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{JSON.stringify(item.first_name)}</li>
            <li>{JSON.stringify(item.last_name)}</li>
            <li>{JSON.stringify(item.email)}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
