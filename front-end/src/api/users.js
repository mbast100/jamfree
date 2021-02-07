
import requests from "../helper/http";

const endpoint = "http://localhost:3001"

const users = {
    login:(data)=>{
        return requests.post(endpoint+"/api/login", data)
    },
};

export default users;