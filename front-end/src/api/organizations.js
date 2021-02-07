import requests from "../helper/http";

const endpoint = "https://1tbf7zts85.execute-api.us-east-1.amazonaws.com/dev"

const organizationss = {
    addUser:(id,data) => {
        return requests.post(endpoint+`/api/restaurant/${id}/users/new`, data)
    },
    getUsers:(id)=>{
        return requests.get(endpoint+`/api/restaurant/${id}/users`)
    }
};

export default organizationss;