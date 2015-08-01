var findItems = require("./test/fixtures.js");

function Pos() {
  this.total = 0.00;
  this.save = 0.00;
  this.products = [];
  
  this.print = function(cartItem) {
    this.products.push(cartItem);
      var str = '';
      str += '名称：' + cartItem.name + '，数量：' +
      cartItem.count + cartItem.unit + '，单价：' +
       cartItem.price.toFixed(2) + '(元)，小计：'  +
      (getRealCount(cartItem)*cartItem.price).toFixed(2)+
       '(元)'+'\n';
    this.total += (getRealCount(cartItem)*cartItem.price);
    this.save += (cartItem.count - getRealCount(cartItem))*cartItem.price;
    console.log(str);
  };

  this.printMoney=function() {
    var str = '----------------------\n' ;
    str += '挥泪赠送商品：\n';

    for(var i = 0; i < this.products.length; i++) {
      var subfindItems = new findItems();
      var promotions = subfindItems.loadPromotions()[0].barcodes;
      for(var j=0; j<promotions.length; j++) {
      if(this.products[i].barcode == promotions[j] && this.products[i].count >= 3) {
        sum = Math.floor(this.products[i].count/3);
        str += '名称：' + this.products[i].name + '，数量：' +
        sum+'\n';
        }
      }
    }


    str += '----------------------\n';
    str+='总计：'+(this.total).toFixed(2)+'\n';
    str+='节省：'+(this.save).toFixed(2)+'\n';
    str += '**********************';
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
