var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/index.js
var require_src = __commonJS({
  "src/index.js"(exports, module2) {
    function add2(...nums) {
      return nums.reduce((acc, curr) => acc + curr, 0);
    }
    module2.exports = add2;
  }
});

// src/main.js
var add = require_src();
var result = add(1, 2, 3);
console.log(result);
