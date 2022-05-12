"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Vas');
const res2 = new AdminBuilder().setName('Vas');
let userThis = new UserBuilder();
if (userThis.isAdmin()) {
    console.log(userThis);
}
else {
    console.log(userThis);
}
