let map = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
];

function dfs(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0 // 0이면 dfs 돌 필요가 X
  )
    return;

  grid[i][j] = 0;

  // 상하좌우
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

function landCount(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
}

console.log(landCount(map));
