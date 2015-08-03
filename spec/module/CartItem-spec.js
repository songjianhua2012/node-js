var CartItem = require("../../module/CartItem.js");
var Item = require("../../module/Item.js");

describe("CartItem",function() {
  var subCartItem;
  beforeEach(function() {
  var Items = [
                new Item('ITEM000000', '可口可乐', '瓶', 3.00),
                new Item('ITEM000001', '雪碧', '瓶', 3.00),
                new Item('ITEM000002', '苹果', '斤', 5.50),
                new Item('ITEM000003', '荔枝', '斤', 15.00),
                new Item('ITEM000004', '电池', '个', 2.00),
                new Item('ITEM000005', '方便面', '袋', 4.50)
              ];
  subCartItem = new CartItem();
  CartItem.loadAllItems(Items);
  });
  describe("addCartItem",function() {
    it("should print right Item",function() {

      subCartItem.addCartItem({barcode:'ITEM000001',count:2});
      expect(subCartItem.barcode).toBe("ITEM000001");
      expect(subCartItem.name).toBe("雪碧");
      expect(subCartItem.unit).toBe("瓶");
      expect(subCartItem.price).toBe(3.00);
      expect(subCartItem.count).toBe(2);
    });
  });

});
