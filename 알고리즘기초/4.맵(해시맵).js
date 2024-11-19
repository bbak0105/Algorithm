// 빈도 수 물어볼 때, Map 쓰면 좋음
// get 과 set을 통해 빈도 수를 쉽게 알 수 있음
const frequencyMap = new Map();

for (const element of arr) {
  const elementNumber = Number(element);
  frequencyMap.set(elementNumber, (frequencyMap.get(elementNumber) || 0) + 1);
}
