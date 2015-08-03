//var findItems = require("./test/fixtures.js");
var allItems = [];
//var Item = require("./Item.js");


function CartItem() {
  this.barcode = '';
  this.count = 0.00;
  this.name = '';
  this.unit = '';
  this.price= 0.00;
}

CartItem.loadAllItems = function(items) {
  allItems = items;
  //console.log(allItems);
};

CartItem.prototype.addCartItem = function(object) {
  //var subfindItem = new findItems();
  //var allItems = CartItem.loadAllItems(items);

  for(var i=0; i<allItems.length; i++) {
    if(object.barcode === allItems[i].barcode) {
      this.barcode = object.barcode;
      this.count = object.count;
      this.name = allItems[i].name;
      this.unit = allItems[i].unit;
      this.price = allItems[i].price;
    }
  }
};

module.exports = CartItem;
