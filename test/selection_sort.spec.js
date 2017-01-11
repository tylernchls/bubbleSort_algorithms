const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
chai.should();
const selectionSort = require('../logic/selection_sort_algorithm');

describe('selectionSort', () => {
  it('should sort an array of numbers from lowest to highest', () => {
    let numArr = [6, 2, 8, 1, 3, 7];
    expect(selectionSort(numArr)).to.include.members([1, 2, 3, 6, 7, 8]);
  });

});