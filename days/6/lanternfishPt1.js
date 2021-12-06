const path   = require('path')
const fs     = require('fs')
const assert = require('assert')

const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8').split(',')

// part 1
function part1(sequence) {
  const arr = sequence.slice()
  for (let i = 0; i < 80; i++) {
    const length = arr.length
    for (let j = 0; j < length; j++) {
      if (0 === arr[j]) {
        arr[j] = 6
        arr.push(8)
      } else {
        arr[j]--
      }
    }
  }

  return arr.length
}

const testData = [3,4,3,1,2]

assert.equal(part1(testData), 5934)

console.log(`
Part 1: ${part1(data)}
`)