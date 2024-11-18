const dictionary = [
  {
    word: "a",
    mean: "라틴 문자의 첫 번째 글자",
  },
  {
    word: "b",
    mean: "라틴 문자의 두 번째 글자",
  },
]

const result = dictionary.find((el) => el.word === 'a');
const result = dictionary.findIndex((el) => el.word === 'a');
const result = dictionary.findLast((el) => el.word === 'a');
const result = dictionary.findLastIndex((el) => el.word === 'a');

const data = [1,2,3,4,5,6];

// includes: if(data.includes(7)) ~~~
// some: console.log(data.some(el => el > e));

