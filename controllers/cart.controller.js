const Product = require('../models/cart.model');

async function addCartItem(req, res) {
  let product;
  try {
    product = await Product.findById(req.body.productId);
  } catch(error) {
    next(error);
    return;
  }

  const cart = res.locals.cart;

  cart.addItem(product);
  res.session.cart = cart;

  req.status(201).json({
    message: 'Cart updated!',
    newTotalItems: cart.totalQuantity,
  });
}

module.exports = {
  addCartItem: addCartItem,
};
