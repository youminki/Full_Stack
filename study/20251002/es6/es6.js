// const map = new Map();

// map.set('1002','조깅, 팔굽혀펴기');
// map.set('1003','등산, 자전거타기');

// console.log(map.get('1002')); // 조깅, 팔굽혀펴기
// console.log(map.get('1003')); // 등산, 자전거타기

// const set = new Set();
// set.add("1002");
// set.add("1003");
// set.add("1002");

// console.log(set.has("1002")); // true
// console.log(set.size); // 2

// for (const val of set){
//     console.log(val);
// }

// for (const val of map){
//     console.log(val);
// }

// // map에서 for문을 사용해서 key값을 사용해서 값만 출력
// for (const val of map.keys()){
//     console.log(map.get(val));
// }


// for (const [key, value] of map){
//     console.log(`${key} : ${value}`);
// }

// const nums = [1, 2, 3, 4];

// // map : 각 요소에 대해 주어진 함수를 호출한 결과로 새로운 배열을 만듦
// const squares = nums.map(n => n ** 2); // [1, 4, 9, 16]
// console.log(`squares: ${squares}`);

// // filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만듦
// const evens = nums.filter(n => n % 2 === 0); // [2, 4]
// console.log(`evens: ${evens}`);

// // reduce : 배열의 각 요소에 대해 주어진 함수를 실행하여 단일 값으로 축소
// const sum = nums.reduce((acc, cur) => acc + cur, 0); // 10
// console.log(`sum: ${sum}`);

// // find : 주어진 함수의 테스트를 통과하는 첫 번째 요소를 반환
// const found = nums.find(n => n > 2); // 3
// console.log(`found: ${found}`);

// // some : 배열의 요소 중 하나라도 주어진 함수의 테스트를 통과하는지 확인
// const hasNegative = nums.some(n => n < 0); // false
// console.log(`hasNegative: ${hasNegative}`);

// // every : 배열의 모든 요소가 주어진 함수의 테스트를 통과하는지 확인
// const allPositive = nums.every(n => n > 0); // true
// console.log(`allPositive: ${allPositive}`);

// // flatMap : 각 요소에 대해 주어진 함수를 호출한 결과를 평면화하여 새로운 배열을 만듦
// const nested = [1, 2, 3];
// const duplicated = nested.flatMap(n => [n, n]); // [1,1,2,2,3,3]
// console.log(`duplicated: ${duplicated}`);


// 구조분해 + 스프레드
const user = {
    name: '김철수',
    age: 30,
    city: '서울'
}

// let name = user.name;
// let age = user.age;
// let city = user.city;

const {name, age, city} = user;
console.log(name, age, city); // 김철수 30 서울

// const user2 = {
//     name: user.name,
//     age: user.age,
//     city: user.city
// }

const user2 = {
    ...user,
    name: "박영희"
};