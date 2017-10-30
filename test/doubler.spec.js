const {expect} = require('chai');
const {doubleEm} = require('../src/doubler');

describe('doubler', () => {
  it('should work', () => {
    const result = doubleEm([16, 9, 8, 2, 4, 3, 7], 2);
    expect(result).to.eql(32);
  });

  it('should work with a large array', () => {
    const large = [];

    while(large.length < 400000) {
      large.push(Math.floor(Math.random() * 1000) + 1);
    }

    expect(doubleEm(large, 1)).to.eql(1024);
  });
});
