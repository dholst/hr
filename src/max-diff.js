module.exports.maxDiff = function maxDiff(input) {
  let cache = {index: -1};
  let max = -1;

  for (let i = 0; i < input.length - 1; i++) {
    let nextBiggest = findNextBiggest(input, i + 1);
    let diff = nextBiggest - input[i];
    if (diff > max) max = diff;
  }

  return max;

  function findNextBiggest(source, startingAt) {
    if (startingAt <= cache.index) return cache.value;

    let nextBiggest = source.slice(startingAt).sort((a, b) => b - a)[0];
    cache.value = nextBiggest;
    cache.index = source.lastIndexOf(nextBiggest);

    return nextBiggest;
  }
};
