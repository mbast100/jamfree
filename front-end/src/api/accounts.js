
import requests from "../helper/http";

const endpoint = "http://localhost:3001"

const accounts = {
    createNewUser:(data, type)=>{
        return requests.post(endpoint+`/api/${type}/new`, data)
    },
};

export default accounts;