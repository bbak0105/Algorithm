const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ...array] = input;

function sorting(arr) {
  const mappingArr = arr.map((person, index) => {
    const [age, name] = person.split(" ");
    return {
      age: parseInt(age),
      name: name,
      index: index,
    };
  });

  mappingArr.sort((a, b) => {
    if (a.age < b.age) {
      return a.age - b.age;
    } else if (a.age === b.age) {
      return a.index - b.index;
    }
  });

  mappingArr.forEach((item) => console.log(`${item.age} ${item.name}`));
}

sorting(array);