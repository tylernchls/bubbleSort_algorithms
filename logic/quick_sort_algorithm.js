module.exports = function quickSort(numArr) {
  let pivot = numArr[0];
  let leftSide = [];
  let rightSide = [];

  if(numArr.length <= 1) {
    return numArr;
  }
  for(var i = 1; i < numArr.length; i++) {
    if(pivot > numArr[i]) {
      // console.log('pivot: ', pivot);
      leftSide.push(numArr[i]);
      // console.log('leftSide: ', leftSide);
    } else {
      rightSide.push(numArr[i]);
      // console.log('rightSide: ', rightSide);

    }
  }

  return quickSort(leftSide).concat(pivot, quickSort(rightSide));

};






















