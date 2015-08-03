var Pos = require("../../module/Pos.js");

describe("Pos",function() {
  var subPrint;
  var cartItem ;
  beforeEach(function() {
    cartItem = {barcode:'ITEM000001',name:"雪碧",count:5,unit:"瓶",price:3.00};
    subPos = new Pos();
  });
  describe("print",function() {
    it("should print right result",function() {

      spyOn(console,'log');
      subPos.print(cartItem);
      var expectText =
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n';
      expect(console.log).toHaveBeenCalledWith(expectText);
    });


  });
});
