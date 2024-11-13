const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);
console.log(numbers.join("\n"));
