/*
 Grabs first number in the array and stores it in value(first will be [6]).
 i = 1 and looks at value at index[1] in the array and moves to conditionals.
 If pass, number at numArr[i] = number at numArr[i-1] (3 now equals 6).
 i is decremented to 0, breaks conditionals and 3 is now placed at numArr[0].
 Pattern continues down the line till all numbers are sorted.

6, 3, 8, 1,] array to be sorted
 @ param numArr

returns numArr sorted
*/
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
















