const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [num, ...array] = input;

array.sort((a, b) => {
  const [xa, ya] = a.split(" ");
  const xan = Number(xa);
  const yan = Number(ya);

  const [xb, yb] = b.split(" ");
  const xbn = Number(xb);
  const ybn = Number(yb);

  if (yan < ybn) {
    return yan - ybn;
  } else {
    if (yan === ybn) {
      return xan - xbn;
    }
  }
});

console.log(array.join("\n"));
