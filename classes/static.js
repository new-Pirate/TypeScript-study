"use strict";
class UserService {
    static getUser(id) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}
UserService.db = 3;
// UserService.dbd();
UserService.getUser(1);
const inst = new UserService();
inst.create();
