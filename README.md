BUBBLE SORT

  Performance:

    Best Case: O(n)
      Input is an array that is already sorted, will run linear time.

    Average Case: O(n^2)

    Worst Case: Reversed ordered collection O(n^2)

  Pseudocode:

    function bubbleSort(A : list of sortable items)
      swapped = false
      for i = 0 to A[length - 1]
        /* if pair is out of order */
        if A[i] > A[i+1] then
         /* swapp values
         A[i+1] = A[i]
         swapped = true
      until swapped = false
    end

  Explanation of Algorithm:

    Compares first value to next value. If first value is greater than its next value, swapps those values so lower value is now first. Continues this pattern until there are no more swapps to be made. Final output will be a sorted list.


INSERTION SORT

  Performance:

    Best Case: O(n)
      Input is an array that is already sorted, will run in linear time. First element is compared only to its right element. Very efficient for sorting small arrays

    Average Case: O(n^2)
      Runs Quadratic time for most random arrays besides best case scenario.

    Worst Case: O(n^2)
      Input is an array that is sorted in decreasing order Forces inner loop to do most of the work when inserting each element.





