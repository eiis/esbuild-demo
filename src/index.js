export default function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
// module.exports = add;
