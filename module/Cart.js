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
  this.products.push({barcode:barcodes,count:counts});
};

module.exports = Cart;
