function date() {}

/*date.showTime = function() {
  var str = '***<没钱赚商店>收据***\n';
  str += '打印时间：' + getTime() + '\n';
  str += '----------------------\n';
    console.log(str);
};*/

date.getTime=function () {
  var date = new Date();
  return (date.getFullYear() + '年' +
   toDouble(date.getMonth() + 1) + '月' +
    toDouble(date.getDate()) + '日 ' +
    toDouble(date.getHours()) + ':' + toDouble(date.getMinutes()) +
     ':' + toDouble(date.getSeconds()));
};

function toDouble(num) {
  return num < 10 ? ('0' + num) : ('' + num);
}

module.exports = date;
