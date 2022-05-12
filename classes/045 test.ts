class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) { }
}

class Delivery {
  constructor(
    date: Date
  ) { }
}

class HomeDelivery extends Delivery {
  constructor(public date: Date, public sddress: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Cart {
  private products: Product[] = [];
  private delivery: HomeDelivery | ShopDelivery;

  addProduct(product: Product): void {
    this.products.push(product);
  }

  delProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId)
  }

  public getSum(): number {
    return this.products.map((p: Product) => p.price).reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: HomeDelivery | ShopDelivery): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (this.products.length === 0) {
      throw new Error("Empty");
    }

    if (!this.delivery) {
      throw new Error("Не указан способ доставки");
    }

    return { success: true }
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'cock', 12));
cart.addProduct(new Product(2, 'suck', 11));
cart.addProduct(new Product(3, 'fruit', 1));
cart.delProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), ''));
console.log(cart.getSum());
console.log(cart.checkout());
