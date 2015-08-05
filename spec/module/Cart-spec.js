var Cart = require("../../module/Cart.js");
var CartItem = require("../../module/CartItem.js");

describe("Cart",function() {
  var subCart;
  var subCartItem;

  beforeEach(function() {
    subCart = new Cart();
    subCart.addProduct('ITEM000000', 1);
    subCart.addProduct('ITEM000001', 2);
  });

  describe("addProduct",function() {
    it("should be right products",function() {
      expect(subCart.products[0].barcode).toBe('ITEM000000');
      expect(subCart.products[1].barcode).toBe('ITEM000001');
    });
  });

  describe("should right totalprice",function() {
    it("calculate total",function() {
      subCart.addProduct('ITEM000001',1);
      subCart.products.forEach(function(val) {
        val.getInfo();
      });
      expect(subCart.getSubtotalPrice()).toBe(9);
      //expect(subCart.products[0].count).toBe(6);
    });
  });

  describe("save money",function() {
    it("calculate save",function() {
      subCart.addProduct('ITEM000001',1);
      subCart.products.forEach(function(val) {
        val.getInfo();
      });
      expect(subCart.getSaving()).toBe(3);
      //expect(subCart.products[0].count).toBe(6);
    });
  });
});
