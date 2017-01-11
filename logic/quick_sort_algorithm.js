/*
Example of how Quicksort works. Pivot is first element in array. Will traverse
both leftSide and rightSide of pivot all the way down unitl reaches base case of
numArr.length <=1 then starts to unravel, concatenating on its way up. Output
will be a sorted array.
*Run live-server and debugger to watch the process
*/
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
























