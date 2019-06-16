# ndarray-corr2
Calculate 2-D correlation coefficient between two ndarrays.

## Installation

```bash
npm install ndarray-corr2
```

## Usage

```js
const ndarray = require("ndarray");
const getPixels = require("get-pixels");
const corr2 = require("ndarray-corr2");

// example 1
let ndarray1 = ndarray([1, 2, 3, 4, 5, 6]);
let ndarray2 = ndarray([1, 2, 3, 4, 5, 6]);
console.log(corr2(ndarray1, ndarray2));
// print "1"

// example 2
let ndarray1 = ndarray([1, 2, 3, 4, 5, 6], [2, 3]);
let ndarray2 = ndarray([6, 5, 4, 3, 2, 1], [2, 3]);
console.log(corr2(ndarray1, ndarray2));
// print "-1"

// example 3
let ndarray1 = ndarray([23, 16, 85, 58], [2, 2]);
let ndarray2 = ndarray([25, 56, 32, 41], [2, 2]);
console.log(corr2(ndarray1, ndarray2));
// print "-0.33985761679300736"

// example 4
getPixels("lena.png", function(err, pixels) {
  if(!err && pixels) {
    console.log(corr2(pixels, pixels));
    // print "1" because the two images are similar
  }
});
```
