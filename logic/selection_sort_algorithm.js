module.exports = function selectionSort(numArr) {
  for(var i = 0; i < numArr.length - 1; i++) {
    let minValue = i;
    for(var j = i + 1; j < numArr.length; j++) {
      if(numArr[j] < numArr[minValue]) {
        minValue = j;
      }
    }
      let temp = numArr[i];
      numArr[i] = numArr[minValue];
      numArr[minValue] = temp;
  }

  return numArr;

};
