const {expect} = require('chai');

const {maxDiff} = require('../src/max-diff');

describe('maxDiff', () => {
  it('should find the max diff', () => {
    expect(maxDiff([31, 7, 8, 21])).to.eql(14);
  });

  it('should return -1 if unable to calculate', () => {
    expect(maxDiff([3, 2, 1])).to.eql(-1);
  });

  it('should calculate with a large array', () => {
    const large = [];

    while(large.length < 400000) {
      large.push(Math.floor(Math.random() * 199) + 2);
    }

    large[42] = 1;
    large[200000] = 201;

    expect(maxDiff(large)).to.eql(200);
  });
});
