import axios from "axios";
import requests from "../helper/http";

const endpoint = "https://connect.squareup.com/v2/customers"

const square = {
    addUser:(data) => {
        return axios.post(endpoint, data, {
            headers:{
                Authorization: "Bearer EAAAEOFSCGxjBF72bnSbhA-VzVNbjRw1zp8sXJiJAQHmc40ZPBzLmcqZLLwIej6t"
            }
        })
    }
};

export default square;