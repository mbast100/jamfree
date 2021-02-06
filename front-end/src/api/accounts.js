
import requests from "../helper/http";

const endpoint = "http"

const accounts = {
    createNewUser:(data, type)=>{
        return requests.post(endpoint+`/api/${type}/new`, data)
    },
};

export default accounts;