const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const [studentNum, cutline] = input[0].split(" ");
const scores = input[1].split(" ").map(Number);

function insertSort(array) {
  for (i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] < currentValue; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentValue;
  }

  return array[cutline - 1];
}

console.log(insertSort(scores));
