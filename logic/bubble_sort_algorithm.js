module.exports = function bubbleSort(bubbleArr) {
  let swapped = true;
  while(swapped === true) {
    swapped = false;
    for(var i = 0; i < bubbleArr.length - 1; i++) {
      if(bubbleArr[i] > bubbleArr[i+1]) {
        let tmp = bubbleArr[i+1];
        bubbleArr[i+1] = bubbleArr[i];
        bubbleArr[i] = tmp;
        swapped = true;
      }
    }
  }


  return bubbleArr;
};