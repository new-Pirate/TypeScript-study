class PaymentCont {
  private date: Date = new Date();

  getDate(this: PaymentCont, a: number) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  }
}

const p = new PaymentCont();
console.log(p.getDate(1));

const userCont = {
  id: 1,
  PayDate: p.getDate.bind(p),
  PayDateArrow: p.getDateArrow,
}

console.log(userCont.PayDate(1));
console.log(userCont.PayDateArrow());

class PayPer extends PaymentCont {
  save() {
    return this.getDateArrow();
  }
}

console.log(new PayPer().save());
