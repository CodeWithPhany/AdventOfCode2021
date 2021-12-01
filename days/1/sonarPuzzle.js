const fs = require("fs");

const text = fs.readFileSync("./inputs.txt") + "";
let input = text.split("\n").map(Number);

let increased = 0;
let decreased = 0;
let previousNum = 0;
let currentNum = 0;
let noChange = 0;
console.log();

for (let num of input) {
  currentNum = num;
  if (previousNum === 0) console.log(num + " (N/A - no previous measurement)");
  else {
    currentNum - previousNum > 0
      ? console.log(num + "(increased)")
      : console.log(num + "(decreased)");
    if (currentNum - previousNum === 0) console.log(num + "(no change)");
    currentNum - previousNum > 0 ? increased++ : decreased++;
  }
  previousNum = currentNum;
}

console.log(
  "\nIncreased: " +
    increased +
    "\nDecreased:" +
    decreased +
    "\nNo change:" +
    noChange
);
