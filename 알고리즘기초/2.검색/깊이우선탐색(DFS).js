const maze = [
	['S', 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 'E'],
  [1, 1, 1, 0, 1],
]

function dfs(maze, position=[0,0], path=[]) {
	let [x, y] = position;
  if(maze[x][y] === 'E') return [...path, position]
  
  // 아래, 위, 우측, 왼쪽 
  let directsions = [[0,1], [0,-1], [1,0], [-1,0]]
  
  for(let [dx, dy] of directsions) {
  	let newX = x + dx 
    let newY = y + dy
    
    let outOfMaze = newX < 0 || newX >= maze.length || newY < 0 || newY >= maze[0].length;
     
    if(!outOfMaze && (maze[newX][newY] === 0 || maze[newX][newY] === 'E')) {
    	maze[x][y] = 1 // 방문한 곳을 표시
      
      let result = dfs(maze, [newX, newY], [...path, position])
      if(result) return result
    }
  }
  return null
}

console.log(dfs(maze))
