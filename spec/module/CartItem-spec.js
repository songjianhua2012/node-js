var CartItem = require("../../module/CartItem.js");

describe("CartItem",function() {
  describe("addCartItem",function() {
    it("should print right Item",function() {
      var subCartItem = new CartItem();
      subCartItem.addCartItem({barcode:'ITEM000000',count:2});
      expect(subCartItem.barcode).toBe("ITEM000000");
      expect(subCartItem.name).toBe("可口可乐");
      expect(subCartItem.unit).toBe("瓶");
      expect(subCartItem.price).toBe(3.00);
      expect(subCartItem.count).toBe(2);
    });
  });
});
