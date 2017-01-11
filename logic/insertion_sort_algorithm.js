module.exports = function insertionSort(numArr) {

  for(var i = 1; i < numArr.length; i++) {
    let value = numArr[i];

    while(i > 0 && numArr[i - 1] > value) {
      numArr[i] = numArr[i - 1];
      i--;
    }

      numArr[i] = value;

  }
  return numArr;
};
















