var CartItem = require("./CartItem.js");
var Inputs = require("./Inputs.js");
var Scanner = require("./Scanner.js");
var Cart = require("./Cart.js");
var CartItem = require("./CartItem.js");
var Pos = require("./Pos.js");

var inputs = Inputs.a();
var subScanner = new Scanner();
var subCart = new Cart();
var cartItems = [];
var subCartItem = new CartItem();
var subPos = new Pos();

for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}
//console.log(subCart.products);
for(var j=0; j<subCart.products.length; j++) {
  //console.log(subCart.products);
  subCartItem.addCartItem(subCart.products[j]);
  cartItems.push(subCartItem);
  //console.log(cartItems[j]);
  //cartItems[j] = subCartItem;
  subPos.print(cartItems[j]);
}
//console.log(cartItems[0]);
//subPos.print(cartItems);
