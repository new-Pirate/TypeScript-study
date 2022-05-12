enum PaymentStatus {
  Holdet,
  Processed,
  Reversed
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holdet;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
    this.status;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment() {
    if (this.status === PaymentStatus.Processed) {
      throw new Error("Платеж не мб возвращен");
    }
    this.status = PaymentStatus.Reversed;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);


