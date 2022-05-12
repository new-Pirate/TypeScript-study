"use strict";
class PaymentE {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsPay extends PaymentE {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new ParsPay();
class UserE {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class AdminE extends UserE {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new AdminE();
class httpErr extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
