module.exports = function getZerosCount(number, base) {

  var j = 0;
  var i = 2;
  var y = 1;
  var arr = new Array();
  var arr1 = new Array();
  var arr2 = new Array();
  var arr3 = new Array();
  var arr4 = new Array();
  var arr5 = new Array();

  while (i <= base) {
    if (base % i == 0) {
      arr[j] = i;
      base = base / i;
      j++;
    }
    else {
      i++;
    }
  }

  arr1.push(arr[0]);
  arr2.push(y);
  for (var k = 1; k < arr.length; k++) {
    if (arr[k] != arr[k - 1]) {
      y = 1;
      arr1.push(arr[k]);
      arr2.push(y);
    }
    else {
      arr2.pop();
      arr2.push(++y);
    }
  }

  for (var m = 0; m < arr1.length; m++) {
    var degree = 1;
    arr3.push(degree);
    var degree1 = arr1[m];
    for (degree = 1; degree1 < number; degree++) {
      degree1 = arr1[m] ** degree;
      arr3.pop();
      arr3.push(degree - 1);
    }
  }

  for (var n = 0; n < arr1.length; n++) {
    sum = 0;
    for (var n1 = 1; n1 < arr3[n] + 1; n1++) {
      sum = sum + Math.floor(number / (arr1[n] ** n1));
    }
    arr4.push(sum);
  }


  for (var p = 0; p < arr4.length; p++) {
    var p1 = (Math.floor(arr4[p] / arr2[p]));
    arr5.push(p1);

  }

  return Math.min.apply(Math, arr5);
}