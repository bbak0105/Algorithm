let land = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 2], [2, 4], [3, 3], [3, 4]];

function bfs(x, y, ls) {
  const queue = [[x, y]];
  ls.delete(`${x},${y}`)

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while(queue.length > 0) {
    const [x, y] = queue.shift();

    for(const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy
      const key = `${nx},${ny}`

      if(ls.has(key)) {
        ls.delete(key);
        queue.push([nx, ny])
      }
    }
  }
}

// landSet에는 방문하지 않은 땅이 들어가있음 
const landSet = new Set(land.map(([x, y]) => `${x},${y}`))
let count = 0;

for(const [x, y]  of land) {
  let land = `${x},${y}`
  if(landSet.has(land)) { // 방문을 안했어야 bfs를 실행함
    bfs(x, y, landSet) 
    count++;
  }
}

console.log('count---', count)
