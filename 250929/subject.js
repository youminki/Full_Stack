// // Extend
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     // 메소드 오버라이드 : 부모 클래스의 메소드를 재정의
//     console.log(`${this.name} barks.`);
//   }
//   run() {
//     console.log(`${this.name} is running.`);
//   }
// }

// const myDog = new Dog("Rex");
// myDog.speak();
// myDog.run();

// //super
// // 생성자 내에서 부모 생성자
// // Dog : 자식클래스 // Animal : 부모클래스
// // super() : 부모 클래스의 생성자를 호출
// // this : 자식 클래스의 생성자를 호출
// // 생성자 내에서 부모 클래스의 생성자를 호출하여 부모 클래스의 속성을 초기화
// // 생성자 내에서 자식 클래스의 생성자를 호출하여 자식 클래스의 속성을 초기화
// // 생성자 내에서 부모 클래스의 생성자를 호출하여 부모 클래스의 속성을 초기화

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }
// }

// const myCat = new Cat("Nabi", "white");
// myCat.speak();

// // or 부모 메서드 호출
// // 오버라이드 : 부모 메서드를 재정의

// class Dog extends Animal {
//   speak() {
//     super.speak();
//     console.log("멍멍")
//   }
// }

// const dog1 = new Dog("초코");
// dog1.speak();



// // 2. 객체
// // Character 클래스 > Property: HP, MP, LV / Method : 이동(상, 하, 좌, 우)
// // 플레이어 클래스 > Property: 직업 / Method : 말걸기, 공격하기
// // 내 캐릭터(인스턴스) > Property: 이름 / Method : 스킬
// // NPC 클래스 > Property: 종족 / Method : 대답
// // 주민NPC > Property: 이름 / Method : 선물하기
// // 적NPC > Property: 이름 / Method : 공격하기, 방어하기

// class Character {
//   constructor(hp, mp, lv) {
//     this.hp = hp;
//     this.mp = mp;
//     this.lv = lv;
//   }
//   move() {
//     console.log('캐릭터가 이동합니다.');
//   }
// }

// class Player extends Character{
//   constructor(hp, mp, lv, job) {
//     super(hp, mp, lv);
//     this.job = job;
//   }
//   say(){
//     console.log("플레이어가 말을 걸었습니다.");
//   }
//   attack(){
//     super.move()
//     console.log("플레이어가 공격을 했습니다.");
//   }
// }

// const character1 = new Character(300, 200, 100);
// const player1 = new Player(100, 200, 20, '백수')
// character1.move()
// player1.say()
// player1.attack()
// console.log(character1)
// console.log(player1)

// //실습: super를 활용해서 부모 & 자식 클래스 메소드를 함께 사용하는 기능을 지난번 과제에 아무거나 하나 추가해보세요
// class NPC extends Character {
//   constructor(hp, mp, lv, species) {
//     super(hp, mp, lv);
//     this.species = species;
//   }
//   say() {
//     console.log("NPC가 말을 걸었습니다.");
//   }
// }
// class ResidentNPC extends NPC {
//   constructor(hp, mp, lv, species, name) {
//     super(hp, mp, lv, species);
//     this.name = name;
//   }
//   giveGift() {
//     super.say();
//     console.log("주민NPC가 선물을 주었습니다.");
//   }
// }

// const npc1 = new NPC(100, 50, 10, '엘프');
// const residentNPC1 = new ResidentNPC(150, 70, 15, '인간', '존');

// npc1.say();
// residentNPC1.giveGift();
// console.log(npc1);
// console.log(residentNPC1);


