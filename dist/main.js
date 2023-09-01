// src/index.js
function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
var src_default = add;

// src/main.js
var result = src_default(1, 2, 3);
console.log(result);
