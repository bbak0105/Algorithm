const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [studentCount, ...inputScores] = input;
const students = [];

for (let i = 0; i < inputScores.length; i++) {
  const promptInput = inputScores[i].split(" ");

  const name = promptInput[0];
  const korean = parseInt(promptInput[1]);
  const english = parseInt(promptInput[2]);
  const math = parseInt(promptInput[3]);

  students.push([name, korean, english, math]);
}

// 국어 내림차순
// 국어 같으면 영어 오름차순
// 국어 영어 같으면 수학 내림차순
// 다 같으면 이름 오름차순
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let pivot = arr[0];

  let [namep, kp, ep, mp] = pivot;

  for (let i = 1; i < arr.length; i++) {
    let [namet, kt, et, mt] = arr[i];

    kp < kt
      ? left.push(arr[i])
      : kp === kt && ep > et
      ? left.push(arr[i])
      : kp === kt && ep === et && mp < mt
      ? left.push(arr[i])
      : kp === kt && ep === et && mp === mt && namep > namet
      ? left.push(arr[i])
      : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort(students).forEach((item) => console.log(item[0]));
