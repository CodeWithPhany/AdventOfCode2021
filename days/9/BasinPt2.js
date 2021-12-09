const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

const heights = input.split('\n').map((row) => row.split('').map(Number));

// part 2
const basinSizes = [];
let allBasinLocations = [];

for (let i = 0; i < heights.length; i++) {
  for (let j = 0; j < heights[i].length; j++) {
    if (
      heights[i][j] !== 9 &&
      !allBasinLocations.find((location) => location[0] === i && location[1] === j)
    ) {
      const basinLocations = [];
      seekBasin(heights, [i, j], basinLocations);

      basinSizes.push(basinLocations.length);
      allBasinLocations = allBasinLocations.concat(basinLocations);
    }
  }
}

basinSizes.sort((a, b) => b - a);
console.log(basinSizes[0] * basinSizes[1] * basinSizes[2]);

function seekBasin(heights, currentLocation, locations) {
  if (
    // Stop when we've gotten to a 9
    heights[currentLocation[0]][currentLocation[1]] === 9 ||
    // Or when we've checked this location before
    locations.find(
      (location) => location[0] === currentLocation[0] && location[1] === currentLocation[1],
    )
  ) {
    return;
  }

  locations.push(currentLocation);

  for (let rowD = -1; rowD <= 1; rowD++) {
    for (let colD = -1; colD <= 1; colD++) {
      if (
        (rowD === 0 || colD === 0) &&
        (rowD !== 0 || colD !== 0) &&
        heights[currentLocation[0] + rowD] !== undefined &&
        heights[currentLocation[0]][currentLocation[1] + colD]
      ) {
        seekBasin(heights, [currentLocation[0] + rowD, currentLocation[1] + colD], locations);
      }
    }
  }
}