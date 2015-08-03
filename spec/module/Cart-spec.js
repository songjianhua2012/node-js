var Cart = require("../../module/Cart.js");

describe("Cart",function() {
  var subCart;
  beforeEach(function() {

    subCart = new Cart();
  });

  describe("constructor",function() {
    it("should be right object",function() {
      expect(subCart.products[0]).toBe(undefined);

    });
  });

  describe("addProduct",function() {
    it("should be right products",function() {
      //expect(subCart.products[0]).toBe(undefined);
      subCart.addProduct('TYPE0001',3);
      expect(subCart.products[0].barcode).toBe('TYPE0001');
      expect(subCart.products[0].count).toBe(3);

      subCart.addProduct('TYPE0001',3);
      expect(subCart.products[0].barcode).toBe('TYPE0001');
      expect(subCart.products[0].count).toBe(6);

      subCart.addProduct('TYPE0002',1);
      expect(subCart.products[1].barcode).toBe('TYPE0002');
      expect(subCart.products[1].count).toBe(1);
    });
  });
});
