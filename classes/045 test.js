"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) { }
}
class HomeDelivery extends Delivery {
    constructor(date, sddress) {
        super(date);
        this.date = date;
        this.sddress = sddress;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    delProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products.map((p) => p.price).reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error("Empty");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки");
        }
        return { success: true };
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
