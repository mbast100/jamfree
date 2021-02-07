
import requests from "../helper/http";

const endpoint = "https://1tbf7zts85.execute-api.us-east-1.amazonaws.com/dev"

const accounts = {
    createNewUser:(data, type)=>{
        return requests.post(endpoint+`/api/${type}/new`, data)
    },
};

export default accounts;