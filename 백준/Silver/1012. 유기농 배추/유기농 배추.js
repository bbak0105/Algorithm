const fs = require('fs')
const raw = fs.readFileSync('/dev/stdin').toString()

function dfs(x, y, wormSet) {
  const key = `${x},${y}`;
  if (!wormSet.has(key)) return;

  wormSet.delete(key);

  dfs(x + 1, y, wormSet);
  dfs(x - 1, y, wormSet);
  dfs(x, y + 1, wormSet);
  dfs(x, y - 1, wormSet);
}

function convertToCases(input) {
  const lines = input.trim().split("\n");
  const T = Number(lines[0]);
  let cases = [];
  let index = 1;

  for (let t = 0; t < T; t++) {
    const [w, h, num] = lines[index].split(" ").map(Number);
    index++;
    const positions = [];

    for (let n = 0; n < num; n++) {
      const [x, y] = lines[index].split(" ").map(Number);
      index++;
      positions.push([x, y]);
    }

    cases.push(positions);
  }

  return cases;
}

const testCases = convertToCases(raw);
for (let i = 0; i < testCases.length; i++) {
  let worm = 0;
  const landCoord = testCases[i];
  const landSet = new Set(testCases[i].map(([x, y]) => `${x},${y}`));

  for (const [x, y] of landCoord) {
    const key = `${x},${y}`;

    if (landSet.has(key)) {
      dfs(x, y, landSet);
      worm++;
    }
  }

  console.log(worm);
}
