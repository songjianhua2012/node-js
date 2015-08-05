var CartItem = require("./CartItem.js");
var Inputs = require("./Inputs.js");
var Scanner = require("./Scanner.js");
var Cart = require("./Cart.js");
var Pos = require("./Pos.js");
var findItems = require("./test/fixtures.js");
var subfind = new findItems();



var inputs = Inputs.a();
var subScanner = new Scanner();
var subCart = new Cart();

for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}

var subPos = new Pos();
//CartItem.loadAllItems(subfind.loadAllItems());
subPos.print(subCart);
