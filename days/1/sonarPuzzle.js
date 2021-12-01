const fs = require("fs");

const text = fs.readFileSync("./input.txt") + "";
let input = text.split("\n").map(Number);

let increased = 0;
let decreased = 0;
let previousNum = 0;
let currentNum = 0;
let noChange = 0;
console.log();

for (let num = 0; num < input.length; num++) {
  currentNum = (input[num] + input[num + 1] + input[num + 2]) / 3;

  if (previousNum === 0) console.log(num + " (N/A - no previous measurement)");
  else {
    if (currentNum - previousNum > 0) {
      increased++;
      console.log(num + "(increased)");
    } else if (currentNum - previousNum < 0) {
      decreased++;
      console.log(num + "(decreased)");
    } else {
      console.log(num + "(no change)");
      noChange++;
    }
  }
  previousNum = currentNum;
}

console.log(
  "\nIncreased: " +
    increased +
    "\nDecrddeased:" +
    decreased +
    "\nNo Change: " +
    noChange
);
