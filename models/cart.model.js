class Cart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(product) {
    const cartItem = {
      product: product,
      quatity: 1,
      totalPrice: product.price
    };

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.product.id === product.id) {
        cartItem.quatity = cartItem.quatity + 1;
        cartItem.totalPrice = cartItem.totalPrice + product.price;
        this.items[i] = cartItem;
        return;
      }
    }
    
    this.items.push(cartItem);
  }
}

module.exports = Cart;
