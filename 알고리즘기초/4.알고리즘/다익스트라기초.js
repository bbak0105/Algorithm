// 1 ~ 6
const graph = [
  [0, 2, 5, 1, Infinity, Infinity],
  [2, 0, 3, 2, Infinity, Infinity],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, Infinity],
  [Infinity, Infinity, 1, 1, 0, 2],
  [Infinity, Infinity, 5, Infinity, 2, 0]
]

const num = graph.length
const dir = Array(num).fill(Infinity)
const visited = Array(num).fill(false)

function getSmallIndex() { //[0, 2, 5, 1, Infinity, Infinity], => 1을 찾아
  let min = Infinity
  let minIndex = Infinity

  for(let i=0; i<num; i++) {
    if(!visited[i] && min > dir[i]) {
      min = dir[i]
      minIndex = i
    }
  }

  return minIndex
}

function dikstra(start) {
  for(let i=0; i<num; i++) { // 초기화
    dir[i] = graph[start][i]
  }
  visited[start] = true;

  for(let j=0; j<num-2; j++) {
    const current = getSmallIndex();
    visited[current] = true

    for(let next=0; next<num; next++) {
      const viaDir = dir[current] + graph[current][next]
      if(!visited[next] && viaDir < dir[next]) {
        dir[next] = viaDir
      }
    }
  }
}

dikstra(0)
console.log(dir) // 0 2 3 1 2 4
