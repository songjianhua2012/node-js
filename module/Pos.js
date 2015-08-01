var findItems = require("./test/fixtures.js");

function Pos() {
  this.total = 0.00;
  this.save = 0.00;
  this.giveproducts = [];

  this.print = function(cartItem) {
    this.giveproducts.push({name:cartItem.name,count:cartItem.count,unit:cartItem.unit});
    //console.log(this.products);
    //console.log('++++++++++++++++++++++++++');
      var str = '';
      str += '名称：' + cartItem.name + '，数量：' +
      cartItem.count + cartItem.unit + '，单价：' +
       cartItem.price.toFixed(2) + '(元)，小计：'  +
      (getRealCount(cartItem,this)*cartItem.price).toFixed(2)+
       '(元)'+'\n';
    this.total += (getRealCount(cartItem,this)*cartItem.price);
    this.save += (cartItem.count - getRealCount(cartItem,this))*cartItem.price;
    console.log(str);
  };

  this.printMoney=function() {
    var str = '----------------------\n' ;
    str += '挥泪赠送商品：\n';

    for(var i = 0; i < this.giveproducts.length; i++) {

        sum = Math.floor(this.giveproducts[i].count/3);
        if(sum !== 0) {
        str += '名称：' + this.giveproducts[i].name + '，数量：' +
        sum+'\n';
      }

      }



    str += '----------------------\n';
    str+='总计：'+(this.total).toFixed(2)+'\n';
    str+='节省：'+(this.save).toFixed(2)+'\n';
    str += '**********************';
    console.log(str);
  };
}

function getRealCount(cartItem,that) {
  var subfindItems = new findItems();
  var promotions = subfindItems.loadPromotions()[0].barcodes;
  var sum = 0;
  for(var i=0; i<promotions.length; i++) {
      if(cartItem.barcode == promotions[i] && cartItem.count >= 3) {
        sum = (cartItem.count - Math.floor(cartItem.count/3));
        //(that.giveproducts).push({name:cartItem.name,count:Math.floor(cartItem.count/3),unit:cartItem.unit});
        return sum;
      }
  }
  return cartItem.count;
}

module.exports = Pos;
