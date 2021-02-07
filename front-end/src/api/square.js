import axios from "axios";
import requests from "../helper/http";

const endpoint = "https://1tbf7zts85.execute-api.us-east-1.amazonaws.com/dev"

const square = {
    addUser:(data) => {
        return axios.post(endpoint, data, {
            headers:{
                Authorization: "Bearer EAAAEOFSCGxjBF72bnSbhA-VzVNbjRw1zp8sXJiJAQHmc40ZPBzLmcqZLLwIej6t"
            }
        })
    },
    addUserV2:(data)=>{
        return axios.post(endpoint+"/api/square", data)
    }
};

export default square;