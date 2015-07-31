var CartItem = require("./CartItem.js");
var Inputs = require("./Inputs.js");
var Scanner = require("./Scanner.js");
var Cart = require("./Cart.js");
var CartItem = require("./CartItem.js");

var inputs = Inputs.a();
var subScanner = new Scanner();
var subCart = new Cart();
var cartItems = [];
var subCartItem = new CartItem();

for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}
//console.log(subCart.products);
for(var j=0; j<subCart.products.length; j++) {
  //console.log(subCart.products);
  subCartItem.addCartItem(subCart.products[j]);
  cartItems.push(subCartItem);
  console.log(cartItems[j]);
}
