import accounts from "./accounts"
import organizationss from "./organizations";
import square from "./square";
import users from "./users";

export default {
    newUserAccount:(data) => {return accounts.createNewUser(data, "users")},
    newOrganizationAccount:(data) => {return accounts.createNewUser(data, "organizations")},
    login:(data) => {return users.login(data);},
    getUsers:(id) => {return users.getUser(id);},
    createUserForOrganization:(id,user) =>{return organizationss.addUser(id,user)},
    getUsersForOrganizations:(id) =>{return organizationss.getUsers(id)},
    addUserToSquare: (data) =>{return square.addUser(data);},
}