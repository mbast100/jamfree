import requests from "../helper/http";

const endpoint = "https://1tbf7zts85.execute-api.us-east-1.amazonaws.com/dev"

const organizationss = {
    addUser:(id,data) => {
        return requests.post(endpoint+`/api/organizations/${id}/users/new`, data)
    }
};

export default organizationss;