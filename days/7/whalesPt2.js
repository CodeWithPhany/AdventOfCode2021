const { readFileSync } = require('fs')
const path = require('path')

// Read input file
// Split by comma
const inputFilePath = path.join(__dirname, 'input.txt')
const input = readFileSync(inputFilePath, 'utf8')
  .trim() // remove final newline
  .split(',')

  // Parse into number
  .map(string => +string)


//part 2

const getFuelUsagePart2 = (numbers, position) => {
  let fuelUsage = 0
  for (const n of numbers) {
    const diff = Math.abs(n - position)
    fuelUsage += 0.5 * diff * (diff + 1)
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

// Part 2 console log
console.log(`Part 2: ${getLowestFuelUsage(input, getFuelUsagePart2)}`)