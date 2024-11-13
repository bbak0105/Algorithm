# Algorithm

# 코딩테스트 핵심 문법

<br/>

- for문으로 1개씩 더할때 => O(N)
- 2중 for문 => O(N제곱)

<br/>

> 자바스크립트는 1억 번의 연산을 처리하기 위해 1~5초가량의 시간이 소요된다. O(N제곱)의 알고리즘을 설계한 경우, N의 값이 5,000이 넘는다면 얼마나 걸릴까? 100초가 넘는다..

<br/>

### 🔎 시간 제한은 보통 1~5초 !

<br/><br/>

# JS로 코테시 주의사항

1.  출력 과정만으로 시간 초과를 받을 수 있으므로, 출력시간을 단축하기 위해 다음과 같은 방법으로 유용하게 사용 할 수 있다.

<br/>

```javaScript
let answer = '';

/**
 * 여러 출력걸과를 매번 console.log()로 처리하는 것이 아니라,
 * 하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 더 빠름
 * => 줄바꿈 기호를 함께 더해주자~!
*/
for (let i=1; i<=100; i++) {
    answer += i + '\n';
}

console.log(answer);
```

<br/>

2. 입력 데이터가 텍스트 파일 형태로 주어지는 경우, <u>fs</u> 모듈을 사용하자.
😈 공백 처리에 주의할 것

<br/>

```javaScript
// fs를 이용하여 파일 읽기

let fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");  // 😈 공백 처리에 주의할 것
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);
```

<br/>

3. 한 줄씩 입력을 받아서, 처리하여 정답을 출력할 때에는 readline 모듈을 사용한다.

<br/>

```javaScript
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stout
});

let input = [];

rl.on('line', function(line) {
    // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
    input.push(line);
}).on('close', function(line) {
    // 콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출
    console.log(input);
    process.exit();
});
```

<br/><br/>

# 언제봐도 까먹는 reduce

<br/>

```javaScript
/**
 * reduce()는 리턴 값이 다시 들어간다고 보면 편함.
 *
*/
let data = [5, 2, 9, 8, 4];

// min 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));

// 원소의 합 구하기 예제
let summary = data.reduce((a, b) => a + b);
```
<br/>

> <b>💡💡💡 굳이 리듀스 안쓰고 이렇게도 가능</b>
```javaScript

console.log('Max', Math.max(...arr))
console.log('Min', Math.min(...arr))

```

<br/><br/>

# 그 외에 코테에서 알면 좋은 것

<br/>

1. 배열 초기화

```javaScript
// 1. 직접 설정
let arr = [8, 1, 4, 5, 7];

// 2. Array로 설정 (길이가 5이고 0으로 초기화)
let arr = new Array(5).fill(0);
```

<br/>

2. 집합 자료형 (중복제거)

```javaScript
let mySet = new Set();

mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7의 포함여부: ${mySet.has(7)}`);

mySet.delete(5);

for(let item of mySet) console.log(item);
```

<br/>

3. 실수 반올림

```javaScript
// 특정 실수에 대하여 toFixed()를 이용해 소수점 반올림
let x = 123.456;
console.log(x.toFixed(2));
```
