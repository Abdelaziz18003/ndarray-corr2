let test = require('tape');
let ndarray = require('ndarray');
let corr2 = require('../index');

let ndarray1 = ndarray([1, 2, 3, 4, 5, 6]);
let ndarray2 = ndarray([6, 5, 4, 3, 2, 1]);
let ndarray3 = ndarray([2, 31, 21]);
let ndarray4 = ndarray([8, 56, 97]);

test('Basic arrays tests', function (t) {
  t.throws(() => corr2([1, 2], [1, 3]), 'corr2 of plain arrays should throw');
  t.isEqual(corr2(ndarray1, ndarray1), 1, 'corr2 of the same array should equal 1');
  t.isEqual(corr2(ndarray1, ndarray2), -1, 'corr2 of reversed arrays should equal -1');

  t.isEqual(
    corr2(ndarray3, ndarray4),
    0.6789073766772663,
    'corr2 of [2, 31, 21] & [8, 56, 97] should equal 0.6789073766772663'
  );

  t.throws(
    () => corr2(ndarray1, ndarray3),
    /size/,
    'corr2 of arrays with different sizes should throw'
  );
  t.end()
});