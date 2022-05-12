type PayStatus = 'new' | 'paid';

class PaymentE {
  id: number;
  status: PayStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = 'paid';
  }
}

class ParsPay extends PaymentE {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {

  }

  override  pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

new ParsPay();


class UserE {
  name: string = 'user';
  constructor() {
    console.log(this.name);
  }
}

class AdminE extends UserE {
  name: string = 'admin';
  constructor() {
    super();
    console.log(this.name);
  }
}

new AdminE();

class httpErr extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}