const path   = require('path')
const fs     = require('fs')
const assert = require('assert')

const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8').split(',')


// Part 2
function part2(sequence) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  for (const n of sequence) {
    arr[n]++
  }
  
  for (let i = 0; i < 256; i++) {
    const newArr = [
      arr[1],
      arr[2],
      arr[3],
      arr[4],
      arr[5],
      arr[6],
      arr[7] + arr[0],
      arr[8],
      arr[0],
    ]
    
    arr = newArr
  }

  return arr.reduce((a, b) => a + b)
}

const testData = [3,4,3,1,2]

assert.equal(part2(testData), 26984457539)

console.log(`
Part 2: ${part2(data)}
`)