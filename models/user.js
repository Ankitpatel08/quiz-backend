const users = [];

module.exports = class User {
    constructor(data) {
        this.data = data;
    }

    saveUser() {
        users.push(this.data);
    }

    static fetchAllUsers() {
        return users;
    }
}