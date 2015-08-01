var CartItem = require("./CartItem.js");
var Inputs = require("./Inputs.js");
var Scanner = require("./Scanner.js");
var Cart = require("./Cart.js");
var CartItem = require("./CartItem.js");
var Pos = require("./Pos.js");
var date = require("./Date.js");

var inputs = Inputs.a();
var subScanner = new Scanner();
var subCart = new Cart();
var cartItems = [];
var subCartItem = new CartItem();
var subPos = new Pos();

date.showTime();
for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}

for(var j=0; j<subCart.products.length; j++) {
  subCartItem.addCartItem(subCart.products[j]);
  cartItems.push(subCartItem);

  subPos.print(cartItems[j]);
}
subPos.printMoney();

//console.log(cartItems);
