
import requests from "../helper/http";

const endpoint = "http://localhost:3001"

const users = {
    login:(data)=>{
        return requests.post(endpoint+"/api/login", data)
    },
    getUser:(id) => {
        return requests.get(endpoint+`/api/users/${id}`)
    }
};

export default users;