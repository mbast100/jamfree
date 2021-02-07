
import requests from "../helper/http";

const endpoint = "https://1tbf7zts85.execute-api.us-east-1.amazonaws.com/dev"

const users = {
    login:(data)=>{
        return requests.post(endpoint+"/api/login", data)
    },
    getUser:(id) => {
        return requests.get(endpoint+`/api/users/${id}`)
    }
};

export default users;