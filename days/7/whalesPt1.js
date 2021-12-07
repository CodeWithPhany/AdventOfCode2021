const { readFileSync } = require('fs')
const path = require('path')

// Read input file
const inputFilePath = path.join(__dirname, 'input.txt')
const input = readFileSync(inputFilePath, 'utf8')
  .trim() // remove final newline
  .split(',')// Split by comma

  // Parse into number
  .map(string => +string)

// Part 1
const getFuelUsage = (numbers, position) => {
  let fuelUsage = 0
  for (const n of numbers) {
    fuelUsage += Math.abs(n - position)
  }
  return fuelUsage
}

const getLowestFuelUsage = (numbers, getFuelUsage) => {
  const allFuelUsage = []
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    const fuelUsage = getFuelUsage(numbers, i)
    allFuelUsage.push(fuelUsage)
  }
  return Math.min(...allFuelUsage)
}
// part 1 console.log
console.log(`Part 1: ${getLowestFuelUsage(input, getFuelUsage)}`)


