var Scanner = require("../../module/Scanner.js");

describe("Scanner",function() {
  describe("constructor",function() {
    it("should be right object",function() {
      var subScanner = new Scanner();

      expect(subScanner.barcode).toBe('');
      expect(subScanner.count).toBe(0);
    });
  });

  describe("addItem",function() {
    it("should be barcode and count",function() {
      var subScanner = new Scanner();
      subScanner.addItem('ITYPEM0001-2');
      expect(subScanner.barcode).toBe('ITYPEM0001');
      expect(subScanner.count).toBe(2);
      
      subScanner.addItem('ITYPEM0002');
      expect(subScanner.barcode).toBe('ITYPEM0002');
      expect(subScanner.count).toBe(1);
    });
  });
});
