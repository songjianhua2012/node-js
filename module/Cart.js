var CartItem = require("./CartItem.js");

function Cart() {
  this.products = [];
}

Cart.prototype.addProduct = function (barcodes,counts) {
  for(var i = 0; i < this.products.length; ++i) {
    if(barcodes === this.products[i].barcode) {
      this.products[i].count += counts;
      return;
    }
  }
  this.products.push(new CartItem(barcodes,counts));
};

Cart.prototype.getSubtotalPrice = function() {
  var allSubtotalPrice = 0;
  this.products.forEach(function(val) {
    allSubtotalPrice += val.getSubtotal();
  });
  return allSubtotalPrice;
};

Cart.prototype.getSaving = function() {
  var allTotalPrice = 0;
  this.products.forEach(function(val) {
    allTotalPrice += val.getPromotionCount()*val.price;
  });
  return allTotalPrice;
};
module.exports = Cart;
