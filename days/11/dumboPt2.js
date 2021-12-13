const input = `
2566885432
3857414357
6761543247
5477332114
3731585385
1716783173
1277321612
3371176148
1162578285
6144726367
`;

const octopuses = input.split('\n').filter(Boolean).map((row) => row.split('').map((a) => parseInt(a)));
const rowCount = octopuses.length;
const columnCount = octopuses[0].length;

const step = () => {
  for (let x = 0; x < columnCount; x++) {
    for (let y = 0; y < rowCount; y++) {
      octopuses[y][x]++;
    }
  }

  const getLocal = (x, y) => {
    const canGoUp = y > 0;
    const canGoRight = x < columnCount - 1;
    const canGoDown = y < rowCount - 1;
    const canGoLeft = x > 0;
    return {
      up: canGoUp ? { x, y: y - 1 } : null,
      upRight: canGoUp && canGoRight ? { x: x + 1, y: y - 1 } : null,
      right: canGoRight ? { x: x + 1, y } : null,
      downRight: canGoDown && canGoRight ? { x: x + 1, y: y + 1 } : null,
      down: canGoDown ? { x , y: y + 1 } : null,
      downLeft: canGoDown && canGoLeft ? { x: x - 1, y: y + 1 } : null,
      left: canGoLeft ? { x: x - 1, y } : null,
      upLeft: canGoUp && canGoLeft ? { x: x - 1, y: y - 1 } : null,
    };
  }

  const flashed = new Set();
  const flash = (x, y) => {
    if (flashed.has(`${x},${y}`)) return;
    flashed.add(`${x},${y}`);
    octopuses[y][x] = 0;

    const around = getLocal(x, y);
    Object.entries(around).filter(([, value]) => !!value).forEach(([, { x: x2, y: y2 }]) => {
      if (flashed.has(`${x2},${y2}`)) return;
      octopuses[y2][x2]++;
      if (octopuses[y2][x2] > 9) {
        flash(x2, y2);
      }
    });
  };

  for (let x = 0; x < columnCount; x++) {
    for (let y = 0; y < rowCount; y++) {
      if (octopuses[y][x] > 9) {
        flash(x, y);
      }
    }
  }
  return flashed.size;
};

let stepCount = 0;
while (true) {
  stepCount++;
  const flashes = step();
  if (flashes === rowCount * columnCount) {
    break;
  }
}

console.log(stepCount)