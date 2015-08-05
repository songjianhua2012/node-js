var findItems = require("./test/fixtures.js");

var Item = require("./Item.js");
var allItems = [];

function CartItem(barcode,count) {
  this.barcode = barcode;
  this.count = count;
  this.name = '';
  this.unit = '';
  this.price= 0.00;
}

/*CartItem.loadAllItems = function(items) {
  allItems = items;
};*/

CartItem.prototype.getInfo = function() {
  var subfindItem = new findItems();
  allItems = subfindItem.loadAllItems();

  for(var i=0; i<allItems.length; i++) {
    if(this.barcode === allItems[i].barcode) {
      this.name = allItems[i].name;
      this.unit = allItems[i].unit;
      this.price = allItems[i].price;
    }
  }
};

CartItem.prototype.getSubtotal = function() {
  return this.price * (this.count - this.getPromotionCount());
};


CartItem.prototype.getPromotionCount = function() {
  var promotionCount = 0;
  for(var i=0; i<allItems.length; i++) {
    if(this.barcode == allItems[i].barcode && this.count >= 3) {
      promotionCount = Math.floor(this.count/3);
    }
  }
  return promotionCount;
};

module.exports = CartItem;
