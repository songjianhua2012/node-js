var findItems = require("./test/fixtures.js");

function Pos() {
  this.total = 0.00;
  this.print = function(cartItem) {
      var str = '';
      str += '名称：' + cartItem.name + '，数量：' +
      cartItem.count + cartItem.unit + '，单价：' +
       cartItem.price.toFixed(2) + '(元)，小计：'  +
      (getRealCount(cartItem)*cartItem.price).toFixed(2)+
       '(元)'+'\n';
    total += (getRealCount(cartItem)*cartItem.price);

    console.log(str);
  };
}

function getRealCount(cartItem) {
  var subfindItems = new findItems();
  var promotions = subfindItems.loadPromotions()[0].barcodes;
  var sum = 0;
  for(var i=0; i<promotions.length; i++) {
      if(cartItem.barcode == promotions[i] && cartItem.count >= 3) {
        sum = (cartItem.count - Math.floor(cartItem.count/3));
        return sum;
      }
  }
  return cartItem.count;
}

module.exports = Pos;
