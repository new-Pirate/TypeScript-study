"use strict";
class PaymentCont {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate(a) {
        return this.date;
    }
}
const p = new PaymentCont();
console.log(p.getDate(1));
const userCont = {
    id: 1,
    PayDate: p.getDate.bind(p),
    PayDateArrow: p.getDateArrow,
};
console.log(userCont.PayDate(1));
console.log(userCont.PayDateArrow());
class PayPer extends PaymentCont {
    save() {
        return this.getDateArrow();
    }
}
console.log(new PayPer().save());
