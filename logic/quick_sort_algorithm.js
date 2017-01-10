module.exports = function quickSort(numArr) {
  let pivot = numArr[0];
  let leftSide = [];
  let rightSide = [];

  if(numArr.length <= 1) {
    return numArr;
  }
  for(var i = 1; i < numArr.length; i++) {
    if(pivot > numArr[i]) {
      leftSide.push(numArr[i]);
    } else {
      rightSide.push(numArr[i]);

    }
  }

  return quickSort(leftSide).concat(pivot, quickSort(rightSide));

};






















