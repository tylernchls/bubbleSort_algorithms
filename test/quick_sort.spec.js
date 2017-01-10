const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
chai.should();
const quickSort = require('../logic/quick_sort_algorithm');

describe('quickSort', () => {
  it('should sort an array of numbers from lowest to highest', () => {
    let numArr = [6, 3, 8, 1, 5, 4, 7, 2];
    console.log(quickSort(numArr));
    expect(quickSort(numArr)).to.include.members([1, 2, 3, 4, 5, 6, 7, 8]);
  });

});
