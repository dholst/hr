module.exports.doubleEm = function doubleEm(input, seed) {
  input.sort((a, b) => a - b).forEach(i => {
    if (seed === i) {
      seed *= 2;
    }
  });

  return seed;
};
