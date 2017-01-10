const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
const should = chai.should;



describe('POST/bubbleSort', function () {
  it('should post to /bubbleSort', (done) => {
    request(app)
    .post('/bubbleSort')
    .set('Content-Type', 'application/json')
    .send({
      "array": [5,1,4,2,8]
    })
    .end((err, res) => {
      if(err) {
        throw new Error(err);
      }
      expect(res.body).to.deep.equal([1,2,4,5,8]);
      done();
    });
  });
});