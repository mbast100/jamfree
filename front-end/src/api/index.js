import accounts from "./accounts"

export default {
    newUserAccount:(data) => {return accounts.createNewUser(data, "users")},
    newOrganizationAccount:(data) => {return accounts.createNewUser(data, "organizations")}
}