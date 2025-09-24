// console.log("다들 만나서 반갑습니다.");
// console.log(30);
// console.log(20);

// console.log(typeof 1);
// console.log(typeof 1.1);
// console.log(typeof 3.14);
// console.log(typeof "me");
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof Infinity);

// //변수 선언
// var x = 30;
// let y = 20;
// const z = 10;

// //변수 타입 확인
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// //변수 값 확인
// console.log(x);
// console.log(y);
// console.log(z);

// //변수 선언은 함수 내에서 모든 동일 이름의 변수에 영향을 미침

// //var은 함수 범위 변수이므로 함수 내에서 동일 이름의 변수에 영향을 미침
// var x = 30;
// //let은 블록 범위 변수이므로 함수 내에서 동일 이름의 변수에 영향을 미치지 않음
// let y = 30;

// //const는 블록 범위 변수이므로 함수 내에서 동일 이름의 변수에 영향을 미치지 않음
// const z = 30;

// //var과 let과 const의 차이점
// //var
// function test1() {
//   var x = 30;
//   if (true) {
//     var x = 40;
//     console.log("inside id : " + x);
//   }
//   console.log("outside id : " + x);
//   x = 50;
//   console.log("final id : " + x);
// }

// test1();

// //let
// function test2() {
//   let y = 30;
//   if (true) {
//     let y = 40;
//     console.log("inside id : " + y);
//   }
//   console.log("outside id : " + y);
//   y = 50;
//   console.log("final id : " + y);
// }

// test2();

// //const
// function test3() {
//   const z = 30;
//   if (true) {
//     const z = 40;
//     console.log("inside id : " + z);
//   }
//   console.log("outside id : " + z);
//   z = 50;
//   console.log("final id : " + z);
// }

// test3();

// //undefinded와 null
// var Minki = null;
// console.log(Minki);

// let Custom = {
//     [1,2,3]
//     [4,5,6]
//     [7,8,9]
// }
// console.log(Custom[1])
// console.log(Custom[0])
// console.log(Custom[2])

// let human = {
//   a: "홍길동",
//   b: 35,
//   c: 174,
// };

// console.log(human["a"]);
// console.log(human["b"]);
// console.log(human["c"]);

// // ===========================================

// // 1. array, 행렬, 객체(키, 값, 쌍) 만들기
// // array => 10, 20, 30, 40, 50, 60, 70, 80, 90
// // 행렬 => 세줄 씩
// // 객체 => 이름, 혈액형, mbti
// let Arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(Arr[0]);

// let Matrix = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];
// console.log(Matrix);

// let Youminki = {
//   name: "유민기",
//   blood: "O",
//   mbti: "INFP",
// };
// console.log(Youminki);

// // 2. var과 let 서로 다른 영역 확인하기
// // let 기준 80, 100, 10 출력
// function Test_let() {
//   let a = 80;
//   if (true) {
//     let a = 100;
//     console.log("블록 안 (let): " + a);
//   }
//   console.log("블록 밖 (let): " + a);
// }
// Test_let();

// function Test_var() {
//   var a = 80;
//   if (true) {
//     var a = 100;
//     console.log("블록 안 (var): " + a);
//   }
//   console.log("블록 밖 (var): " + a);
// }
// Test_var();

// // ===========================================

// // 변수 선언과 자료형 확인
// console.log(say); // undefined (var 호이스팅 때문에 선언만 위로 올라감)

// var say = "hello";
// console.log(say); // "hello"

// // 변수 값 변경
// var say = 20;
// console.log(say); // 20

// say = "hi";
// console.log(say); // "hi"

// // let 사용
// let say2 = 30;
// console.log(say2); // 30
// console.log(typeof say2); // number

// say2 = "hi";
// console.log(say2); // "hi"
// console.log(typeof say2); // string

// 조건문과 반복문
// if / else / else if

//연산자
// +, -, *, /
// > , <, ==, !=
// &&(and), ||(or), !(not)
// and : 두 가지 조건 모두 참
// or : 둘 중 하나만 참
// not : true <--> false
let score = 80;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score > 80) {
  grade = "B";
} else if (score > 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log("성적은 " + grade + "입니다.");

// =====================================
let isStudent = true;
let hasIDCard = true;

if (isStudent && hasIDCard) {
  console.log("학생 할인 적용");
} else {
  console.log("할인 불가능");
}

// =====================================
let hasIDCard2 = true;
let hasDrivingCard = false;

if (hasIDCard2 || hasDrivingCard) {
  console.log("출입허가");
} else {
  console.log("신분증이 필요합니다.");
}

// =====================================
for (let i = 0; i < 9; i++) {
  console.log(i);
}

// =====================================

// 1. 기온에 따라 외출 복장 추천
// 30도 이상 : 반팔
// 25도 이상 ~ 30도 미만 : 가벼운 긴팔
// 20도 이상 ~ 25도 미만 : 가벼운 외투
// 20도 미만 : 외투

let temp = 26; // 기온 값 설정
let clothes = ""; // 추천 복장을 담을 변수

if (temp >= 30) {
  clothes = "반팔";
} else if (temp >= 25 && temp < 30) {
  clothes = "가벼운 긴팔";
} else if (temp >= 20 && temp < 25) {
  clothes = "가벼운 외투";
} else {
  clothes = "외투";
}
console.log("오늘은 " + clothes + "를 입고 나가세요.");

// 2. 아이디 and 비밀번호
// 변수: 아이디 = ID, 비밀번호 = Password
// 둘 다 맞으면 : '로그인 되었습니다. ' 출력
// 하나라도 틀리면
// : "아이디 또는 비밀번호를 다시 확인해주세요."

let Id;
let Password;

if (Id == true && Password == true) {
  console.log("로그인 되었습니다.");
} else {
  console.log("아이디 또는 비밀번호를 다시 확인해주세요.");
}

// 3. 지문인식 or 홍채인식
// 변수: 지문=finger, 홍채=eye
// 둘 중 하나라도 맞으면 인증되었습니다.
// 둘 다 틀리면
// '확인되지 않은 생체 인증 정보입니다.'

let finger;
let eye;

if (finger == true || eye == true) {
  console.log("인증되었습니다.");
} else {
  console.log("확인되지 않은 생체 인증 정보입니다.");
}
