module.exports = function mergeSort(numArr) {
  let results = [];
  let arrLength = numArr.length;
  let mid = Math.floor(numArr.length / 2);
  let left = numArr.slice(0, mid);
  let right = numArr.slice(mid, arrLength);



  //base case
  if(numArr.length <= 1) {
    return numArr;
  }

  return mergeSort(left), mergeSort(right);



};