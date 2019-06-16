'use strict';

const ndarray = require('ndarray');
const {sum, mul, subs} = require('ndarray-ops');

function corr2 (ndarray1, ndarray2) {
  if (ndarray1.dimension > 2 || ndarray2.dimension > 2) {
    throw new Error('Expected inputs to be two-dimensional ndarrays.');
  }
  const mean1 = sum(ndarray1) / ndarray1.size;
  const mean2 = sum(ndarray2) / ndarray2.size;

  let a = ndarray(new Array(ndarray1.size), ndarray1.shape);
  let b = ndarray(new Array(ndarray2.size), ndarray2.shape);
  let c = ndarray(new Array(ndarray2.size), ndarray2.shape);

  subs(a, ndarray1, mean1);
  subs(b, ndarray2, mean2);

  return sum(mul(c, a, b)) / Math.sqrt(sum(mul(c, a, a)) * sum(mul(c, b, b)));
}

module.exports = corr2;