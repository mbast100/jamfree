import requests from "../helper/http";

const endpoint = "http://localhost:3001"

const organizationss = {
    addUser:(id,data) => {
        return requests.post(endpoint+`/api/organizations/${id}/users/new`, data)
    }
};

export default organizationss;