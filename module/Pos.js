var findItems = require("./test/fixtures.js");
var CartItem = require("./CartItem.js");
var date = require("./Date.js");


function Pos() {
  this.total = 0;
  this.save = 0;
}
Pos.prototype.print=function(cart) {
  var subCart = cart.products;
  var findItem = new findItems();
  var promo = findItem.loadPromotions()[0].barcodes;
  var str = '***<没钱赚商店>收据***\n';
  str += '打印时间：' + date.getTime() + '\n';
  str += '----------------------\n';

  for(var i=0; i<subCart.length; i++) {
    subCart[i].getInfo();
    str += '名称：' + subCart[i].name + '，数量：' +
    subCart[i].count + subCart[i].unit + '，单价：' +
     subCart[i].price.toFixed(2) + '(元)，小计：'+
     subCart[i].getSubtotal()+'\n';
  }
  str += '----------------------\n';
  str += '挥泪赠送商品：\n';

  for(var j=0; j<promo.length; j++) {
   for(var k=0; k<subCart.length; k++) {
     if(subCart[k].barcode === promo[j] && subCart[k].count >= 3) {
       //console.log(subCart[k]);
       str += '名称：' + subCart[k].name + '，数量：' +
       subCart[k].getPromotionCount() + subCart[k].unit + '\n';
     }
   }
 }

  str += '----------------------\n';
  str+='总计：'+(cart.getSubtotalPrice()).toFixed(2)+'\n';
  str+='节省：'+(cart.getSaving()).toFixed(2)+'\n';
  str += '**********************';
  console.log(str);
};


module.exports = Pos;
