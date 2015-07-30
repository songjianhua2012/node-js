function Scanner() {
  this.barcode = '';
  this.count = 0;
}

Scanner.prototype.addItem = function(item) {
  var str = item.split('-');
  this.barcode = str[0];
  if(!isNaN(str[1]))
      this.count = parseInt(str[1]);
  else {
      this.count = 1;  
  }
};

module.exports = Scanner;
