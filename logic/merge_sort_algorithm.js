// not passing need to fix test and logic


module.exports = function mergeSort(left, right, numArr) {

  var lengthOfLeft = left.length;
  var lengthOfRight = right.length;
  var l = 0;
  var r = 0;
  var a = 0;

  //depending on either if the first number on the left or right side is larger
  //the 'l' or 'r' will be incremented. 'a' will always increment
  while(l < lengthOfLeft && r < lengthOfRight){
    if (left[l] <= right[r]) {
      numArr[a] = left[l];
      l +=1;
    } else{
      numArr[a] = right[r];
      r += 1
    }
    a +=1;
  }

  //since the lesser value has been placed on the 1st index, the second number needs
  //to fill in the 2nd array index
  while(l < lengthOfLeft) {
    numArr[a] = left[l];
    l +=1;
    a +=1;
  }
  while(r < lengthOfRight){
    numArr[a] = right[r];
    r +=1;
    a +=1;
  }

  //returns sorted array from each call stack
  return numArr;
}