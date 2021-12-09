const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

const heights = input.split('\n').map((row) => row.split('').map(Number));

//part 1

let riskLevel = 0;

for (let i = 0; i < heights.length; i++) {
  for (let j = 0; j < heights[i].length; j++) {
    if (
      (j === 0 || heights[i][j] < heights[i][j - 1]) &&
      (j === heights[i].length - 1 || heights[i][j] < heights[i][j + 1]) &&
      (i === 0 || heights[i][j] < heights[i - 1][j]) &&
      (i === heights.length - 1 || heights[i][j] < heights[i + 1][j])
    ) {
      riskLevel += heights[i][j] + 1;
    }
  }
}

console.log({ riskLevel });


