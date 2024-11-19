const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [cardNum, cards, sangNum, sangCards] = input;
const sortedArr = cards.split(" ").sort((a, b) => {
  const na = Number(a);
  const nb = Number(b);
  return na - nb;
});

const frequencyMap = new Map();
for (const element of sortedArr) {
  const elementNumber = Number(element);
  frequencyMap.set(elementNumber, (frequencyMap.get(elementNumber) || 0) + 1);
}

const answer = sangCards.split(" ").map((item) => {
  const itemNumber = Number(item);
  if (frequencyMap.get(itemNumber)) {
    return frequencyMap.get(itemNumber);
  } else {
    return 0;
  }
});

console.log(answer.join(" "));