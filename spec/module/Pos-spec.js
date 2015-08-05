var CartItem = require("../../module/CartItem.js");
var Inputs = require("../../module/Inputs.js");
var Scanner = require("../../module/Scanner.js");
var Cart = require("../../module/Cart.js");
var Pos = require("../../module/Pos.js");
var findItems = require("../../module/test/fixtures.js");

var subPrint;
var cart ;
var subfind = new findItems();
var inputs = Inputs.a();
var subScanner = new Scanner();
var subCart = new Cart();

for(var i=0; i<inputs.length; ++i) {
  subScanner.addItem(inputs[i]);
  subCart.addProduct(subScanner.barcode,subScanner.count);
}
var subPos = new Pos();

describe("Pos",function() {

  beforeEach(function() {

    dateDigitToString = function(num) {
       return num < 10 ? '0' + num : num;
     };
  });
  describe("print",function() {
    it("should print right result",function() {
      spyOn(console,'log');
      subPos.print(subCart);

      var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

      var expectText =
      '***<没钱赚商店>收据***\n' +
      '打印时间：' + formattedDateString + '\n' +
      '----------------------\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '名称：雪碧，数量：1瓶\n' +
      '名称：方便面，数量：1袋\n' +
      '----------------------\n' +
      '总计：51.00\n' +
      '节省：7.50\n' +
      '**********************';
      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});
