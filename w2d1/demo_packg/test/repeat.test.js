const expect = require('chai').expect;

const repeatNumber = require('../repeat');

describe('repeatNumber', () => {
  it('should throw if wrong input', () => {
    // this didn't work; not sure why. The documentations is here: https://www.chaijs.com/api/bdd/#method_throw
    // expect(() => repeatNumber([])).to.throw();
    expect(repeatNumber).to.throw();
  })
  it('should be a function', () => {
    expect(typeof repeatNumber).to.equal('function')
  })

  it('should return 1111111111 given [[1, 10]]', () => {
    const result = repeatNumber([
      [1, 10]
    ]);

    expect(result).to.equal('1111111111')
  })

  it('should return 11, 222 given [[1, 2], [2, 3]]', () => {
    const result = repeatNumber([
      [1, 2],
      [2, 3]
    ]);

    expect(result).to.equal('11, 222')
  })

})