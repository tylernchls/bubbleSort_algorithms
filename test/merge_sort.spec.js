const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
chai.should();
const mergeSort = require('../logic/merge_sort_algorithm');

describe('mergeSort', () => {
  it('should sort an array of numbers from lowest to highest', () => {
    let numArr = [6, 3, 8, 1, 5, 4, 7, 2];
    expect(mergeSort(numArr)).to.include.members([1, 2, 3, 4, 5, 6, 7, 8]);
  });

});