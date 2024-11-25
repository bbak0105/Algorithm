
let land = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
  [2, 2],
  [2, 4],
  [3, 3],
  [3, 4],
];

function dfs(x, y, ls) {
  const key = `${x},${y}`;
  if (!ls.has(key)) return;

  // 방문 처리
  ls.delete(key);

  dfs(x + 1, y, ls);
  dfs(x - 1, y, ls);
  dfs(x, y + 1, ls);
  dfs(x, y - 1, ls);
}

let landSet = new Set(land.map(([x, y]) => `${x},${y}`));
let count = 0;

for (const [x, y] of land) {
  let key = `${x},${y}`;
  if (landSet.has(key)) {
    // 1이면 가정
    dfs(x, y, landSet);
    count++;
  }
}

console.log("count", count);
