const fs = require("fs")
const readline = require("readline")

const readFile = async (path) => {
  const fileStream = fs.createReadStream(path)
  const rl = readline.createInterface({
    input: fileStream,
  })
  const result = []
  for await (const line of rl) {
    result.push(line)
  }
  return result
}

const mostCommonBitAtIndex = (input, i) => {
  const count_one = input.reduce((prev, curr) => curr.charAt(i) === "1" ? prev + 1 : prev, 0)
  return count_one >= input.length - count_one ? "1" : "0"
}

const partOne = (input) => {
  let gamma_rate = ""
  let epsilon_rate = ""
  for (let i = 0; i < input[0].length; i++) {
    const most_common = mostCommonBitAtIndex(input, i)
    const least_common = most_common === "0" ? "1" : "0"
    gamma_rate = gamma_rate.concat(most_common)
    epsilon_rate = epsilon_rate.concat(least_common)
  }
  return parseInt(gamma_rate, 2) * parseInt(epsilon_rate, 2)
}

readFile("input.txt").then(input => {
  console.log(`solution to part 1: ${partOne(input)}`)
})