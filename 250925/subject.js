function MyOwn() {
  console.log("Hello World");
}

MyOwn();
MyOwn(1);

// ========================================

function MyName(name) {
  console.log("Hello " + name);
}

MyName("Minki");

// ========================================

function add(a, b) {
  console.log(a + b);
}

add(1, 2);

// ========================================

//곱하기, 나누기(몫, 나머지), n제곱
function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

function remainder(a, b) {
  console.log(a % b);
}

function power(a, b) {
  console.log(a ** b);
}

multiply(4, 2);
divide(4, 2);
remainder(4, 2);
power(4, 2);

// ========================================

//return
function add2(a, b) {
  return a + b;
}
console.log(add2(1, 2));

function add3(a, b) {
  const result = a + b;
  return result;
}
console.log(add3(1, 2));

function nTimes(x, count = 2) {
  return x * count;
}
console.log(nTimes(5));
console.log(nTimes(5, 3));

//함수 표현식
const sub2 = function (a, b) {
  console.log(a - b);
};

//화살표 함수
const sub3 = (a, b) => {
  console.log(a - b);
};

sub2(2, 1);
sub3(2, 1);

const noVariable = () => {
  console.log("No Variable");
};

noVariable();

const substract = (a, b) => a - b;
console.log(substract(5, 3));

//콜백함수 : 다른 함수의 인자로 전달되어, 특정 작업이 완료된 후 호출되는 함수
function whatYourName(name, callback) {
  console.log("이름 " + name);
  callback();
}

function sayHello() {
  console.log("Hello");
}

whatYourName("Minki", sayHello);

function sample(variable1, variable2, callback) {
  console.log(`첫번째 인자 : ${variable1}`);
  console.log(`두번째 인자 : ${variable2}`);
  const result = variable1 + variable2;
  callback(result);
}

sample(5, 6, (result) => {
  console.log(`결과 : ${result}`);
});

// ========================================
//실습
//0. 매개변수로 x,y를 받아 for문을 사용해 x의 y제곱을 반환하는 함수
function power(x, y) {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res *= x;
  }
  console.log(res);
}
power(4, 2);

//1. 매개변수로 x,y를 받아 for문을 사용해 x의 y제곱을 반환하는 함수를 작성하는데
//   y값이 지정되지 않으면 x의 제곱을 반환하는 함수
function power2(x, y = 2) {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res *= x;
  }
  console.log(res);
}

power2(4);

//2. 조건문을 사용하여 매개변수로 전달된 두 숫자 중 큰값을 반환하는 함수
function max(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

max(13, 15);

//3. 화살표 함수를 사용해 매개변수로 전달된 값이 짝수인지 홀수인지
//   true, false 값을 반환하는 함수

const CheckNum = (num, callback) => {
  if (num % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
CheckNum(14);

// ========================================
// 배열
let fruits = ["사과", "오렌지", "바나나", "딸기"];
console.log(fruits[1]);
fruits[1] = "키위";
console.log(fruits);
console.log(fruits[1]);

//push & pop
// push : 배열의 뒤에 새로운 요소를 추가
// pop : 배열의 마지막 요소를 제거
let fruits2 = ["사과", "오렌지", "바나나", "딸기"];
fruits2.push("키위");
console.log(fruits2);
fruits2.push("멜론");
console.log(fruits2);

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

let fruits3 = ["사과", "오렌지", "바나나", "딸기"];
let lastFruit = fruits3.pop();
console.log(lastFruit);
console.log(fruits3);

//shift & unshift
// pop : 마지막 요소를 제거
// shift : 첫번째 요소를 제거
let fruits = ["사과", "오렌지", "바나나", "딸기"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// push : 뒤 추가 < > unshift 앞 추가
// pop : 뒤 제거 < > shift 앞 제거

// slice
let fruits = ["사과", "오렌지", "바나나", "딸기"];
let a = fruits.slice(1, 3);
console.log(a);

// splice : 배열의 요소를 추가, 제거 또는 교체
// splice(x,y,z) : x번째 인덱스부터 y번째를 지우고 z를 추가
const months = ["1월", "2월", "3월", "4월", "6월"];
console.log(months);
months.splice(4, 1, "5월");
console.log(months);

let numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(2, 2);
console.log(numbers);

// foreach : 배열의 각 요소에 대해 제공된 함수를 실행
let fruits = ["사과", "오렌지", "바나나", "딸기"];
fruits.forEach((fruit, index) => {
  console.log(index + " : " + fruit);
});

let numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2);
});

// map : 배열의 각 요소에 대해 제공된 함수를 실행하고, 그 결과로 새로운 배열을 생성
let numbers = [1, 2, 3];
let double = numbers.map((num) => num * 2);
console.log(double);

// filter : 특정 조건을 만족하는 요소만 추출
let fruits = ["apple", "banana", "orange", "kiwi", "pear"];
let long = fruits.filter((fruit) => fruit.length > 5);
console.log(long);

// reduce : 배열의 각 요소에 대해 제공된 함수를 실행하고, 단일 값으로 축소
let numbers = [1, 2, 3, 4, 5];
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product);

// initialValue : 누적값의 초기값을 설정
// currentValue : 배열의 현재 처리 중인 요소

let sigma = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sigma);

// find : 특정 조건을 만족하는 첫번째 요소를 반환
let fruits = ["apple", "banana", "orange", "kiwi", "pear"];
let found = fruits.find((fruit) => fruit.length > 4);
console.log(found);
// findIndex : 특정 조건을 만족하는 첫번째 요소의 인덱스를 반환
let foundIndex = fruits.findIndex((fruit) => fruit.length > 4);
console.log(foundIndex);
// some : 배열의 요소 중 특정 조건을 만족하는 요소가 있는지 확인
let hasLongFruit = fruits.some((fruit) => fruit.length > 5);
console.log(hasLongFruit);
// every : 배열의 모든 요소가 특정 조건을 만족하는지 확인
let allLongFruits = fruits.every((fruit) => fruit.length > 2);
console.log(allLongFruits);
// includes : 배열이 특정 요소를 포함하는지 확인
let includesBanana = fruits.includes("banana");
console.log(includesBanana);
// sort : 배열의 요소를 정렬
let sortedFruits = fruits.slice().sort();
console.log(sortedFruits);
// reverse : 배열의 요소 순서를 반전
let reversedFruits = fruits.slice().reverse();
console.log(reversedFruits);
// concat : 두 개 이상의 배열을 병합
let moreFruits = ["mango", "peach"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);
// join : 배열의 모든 요소를 문자열로 결합
let fruitString = fruits.join(", ");
console.log(fruitString);
// split : 문자열을 배열로 분할
let str = "apple, banana, orange";
let strToArray = str.split(", ");
console.log(strToArray);
// Array.isArray : 주어진 값이 배열인지 확인
let isArray = Array.isArray(fruits);
console.log(isArray);

// 객체
const person = {
  name: "유민기",
  height: 173,
  weight: 66,
  steal: function () {
    console.log("적의 무기를 뺏는다.");
  },
};

console.log(person);
console.log(person.name);
console.log(person.height);
console.log(person.weight);
console.log(person.steal());

delete person.weight;
console.log(person.weight);
person.steal();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.Hello = function () {
    console.log("Hello " + this.name);
  };
}

let person1 = new Person("Minki", 26);
let person2 = new Person("Alice", 30);
console.log(person1.name);
console.log(person2.age);

console.log(person1);
console.log(person2);

// 실습
// 좋아하는 영화나 캐릭터 명대사 넣어서 객체로 만들어보기
function Movie(title, year, content) {
  this.title = title;
  this.year = year;
  this.content = content;
  this.info = function () {
    console.log(
      `${this.year}년에 개봉한 ${this.title}의 명대사: ${this.content}`
    );
  };
}

let movie1 = new Movie(
  "나니아의 연대기",
  2005,
  "용기란 두려움 없는 것이 아니라 두려움보다 더 큰 것이다."
);

console.log(movie1);

// class
class Person5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Hello() {
    console.log("Hello " + this.name);
  }
}

let person5 = new Person5("Minki", 26);
person5.Hello();
console.log(person5);

// 실습
// class로 좋아하는 영화나 캐릭터 명대사 넣어서 객체로 만들어보기
class Movie2 {
  constructor(title, year, content) {
    this.title = title;
    this.year = year;
    this.content = content;
    this.info = function () {
      console.log(
        `${this.year}년에 개봉한 ${this.title}의 명대사: ${this.content}`
      );
    };
  }
}

let movie2 = new Movie2(
  "나니아의 연대기",
  2005,
  "용기란 두려움 없는 것이 아니라 두려움보다 더 큰 것이다."
);

movie2.info();

// ========================================
//절차지향적 방식

let Result = 0;

function add(x, y) {
  Result = x + y;
  console.log(`Result: ${Result}`);
}

function subtract(x, y) {
  Result = x - y;
  console.log(`Result: ${Result}`);
}

function multiply(x, y) {
  Result = x * y;
  console.log(`Result: ${Result}`);
}

function divide(x, y) {
  if (y === 0) {
    console.log("Error: Division by zero");
    return;
  }
  Result = x / y;
  console.log(`Result: ${Result}`);
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

// ========================================
// 객체지향적 방식

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(x, y) {
    this.result = x + y;
    console.log(`Result: ${this.result}`);
  }

  subtract(x, y) {
    this.result = x - y;
    console.log(`Result: ${this.result}`);
  }

  multiply(x, y) {
    this.result = x * y;
    console.log(`Result: ${this.result}`);
  }

  divide(x, y) {
    if (y === 0) {
      console.log("Error: Division by zero");
      return;
    }
    this.result = x / y;
    console.log(`Result: ${this.result}`);
  }
}

const calc = new Calculator();
console.log(calc.add(10, 2));
console.log(calc.subtract(10, 2));
console.log(calc.multiply(10, 2));
console.log(calc.divide(10, 2));

// 계산 결과를 객체 내부에 저장
// 객체의 상태유지, 기능 확장
// 절차지향 vs 객체지향

// Extend
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    // 메소드 오버라이드 : 부모 클래스의 메소드를 재정의
    console.log(`${this.name} barks.`);
  }
  run() {
    console.log(`${this.name} is running.`);
  }
}

const myDog = new Dog("Rex");
myDog.speak();
myDog.run();

//========================================
// 1. 배열
// push : 뒤 추가
// pop : 뒤 제거
// shift : 앞 제거
// unshift : 앞 추가
// slice : 배열의 일부를 추출하여 새로운 배열 생성
// splice : 배열의 요소를 추가, 제거 또는 교체

// initial array : 1월 ~ 11월
// 모든 메서도를 최소 1회 이상 활용하여 1월과 12월만 남은 배열 생성

let months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
];
months.pop();
console.log(months);
months.push("12월");
console.log(months);
months.shift();
console.log(months);
months.unshift("1월");
console.log(months);
months.slice(0, 1);
console.log(months);
months.splice(1, 12);
console.log(months);
months.push("12월");
console.log(months);

// 2. 객체
// Character 클래스 > Property: HP, MP, LV / Method : 이동(상, 하, 좌, 우)
// 플레이어 클래스 > Property: 직업 / Method : 말걸기, 공격하기
// 내 캐릭터(인스턴스) > Property: 이름 / Method : 스킬
// NPC 클래스 > Property: 종족 / Method : 대답
// 주민NPC > Property: 이름 / Method : 선물하기
// 적NPC > Property: 이름 / Method : 공격하기, 방어하기

class Character {
  constructor(hp, mp, lv) {
    this.hp = hp;
    this.mp = mp;
    this.lv = lv;
  }
  moveUp() {
    console.log("위로 이동");
  }
  moveDown() {
    console.log("아래로 이동");
  }
  moveLeft() {
    console.log("왼쪽으로 이동");
  }
  moveRight() {
    console.log("오른쪽으로 이동");
  }
}

class Player extends Character {
  constructor(hp, mp, lv, job) {
    super(hp, mp, lv);
    this.job = job;
  }
  talk() {
    console.log("말걸기");
  }
  attack() {
    console.log("공격하기");
  }
}

class Mycharacter extends Player {
  constructor(hp, mp, lv, job, name) {
    super(hp, mp, lv, job);
    this.name = name;
  }
  useSkill() {
    console.log("스킬 사용");
  }
}

class Npc extends Character {
  constructor(hp, mp, lv, human) {
    super(hp, mp, lv);
    this.human = human;
  }
  answer() {
    console.log("대답");
  }
}

class ResidentNpc extends Npc {
  constructor(hp, mp, lv, human, name) {
    super(hp, mp, lv, human);
    this.name = name;
  }
  present() {
    console.log("선물하기");
  }
}

class EnemyNpc extends Npc {
  constructor(hp, mp, lv, human, name) {
    super(hp, mp, lv, human);
    this.name = name;
  }
  attack() {
    console.log("공격하기");
  }
  defend() {
    console.log("방어하기");
  }
}
