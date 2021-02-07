import accounts from "./accounts"
import users from "./users";

export default {
    newUserAccount:(data) => {return accounts.createNewUser(data, "users")},
    newOrganizationAccount:(data) => {return accounts.createNewUser(data, "organizations")},
    login:(data) => {return users.login(data);}
}