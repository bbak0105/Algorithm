const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [num, ...array] = input;

function groupWordChecker(array) {
  let isNot = 0;

  for (let i = 0; i < array.length; i++) {
    const checkWords = array[i].split("");
    const prevTexts = new Set();

    for (let j = 0; j < checkWords.length; j++) {
      if (
        j > 0 &&
        checkWords[j] !== checkWords[j - 1] &&
        prevTexts.has(checkWords[j])
      ) {
        isNot++;
        break;
      }

      prevTexts.add(checkWords[j]);
    }
  }

  return num - isNot;
}

console.log(groupWordChecker(array));