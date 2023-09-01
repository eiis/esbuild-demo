// export default function add(...nums) {
//   return nums.reduce((acc, curr) => acc + curr, 0)
// }
// module.exports = add;
// import * as espree from 'espree'

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
}

// const ast = espree.parse('let foo = "bar"', { ecmaVersion: 6 })
// console.log(JSON.stringify(ast, null, 2))

export default add
