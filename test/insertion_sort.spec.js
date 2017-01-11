const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
chai.should();
const insertionSort = require('../logic/insertion_sort_algorithm');

describe('insertionSort', () => {
  it('should sort an array of numbers from lowest to highest', () => {
    let numArr = [6, 3, 8, 1,];
    expect(insertionSort(numArr)).to.include.members([1, 3, 6, 8]);
  });

});