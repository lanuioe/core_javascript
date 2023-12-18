/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tall: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: "호랑이무늬",
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: "white",
  name: "포동이",
  __proto__: tiger,
};

const 시베리아호랑이 = {
  color: "black",
  name: "시동이",
  __proto__: tiger,
};

// tiger.proto = animal;

//* 생성자 함수
// function button() {}

// function Button2() {}

// // 선언은 똑같아 보이지만, 호출을 할 때 new 키워드의 여부로 일반함수와 생성자함수가 결정됨 (대문자 표기는 관례일 뿐)
// button(); // 일반함수

// new Button2(); // 생성자함수 -> 무조건 객체를 반환

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

function Tiger() {
  // Animal에 this.어쩌구저쩌구~ 에 대한 부분을 복사한다고 볼 수 있음
  // 생성자 함수를 불러올때는 그냥 호출하지말고 call로 this를 바인딩해야한다
  Animal.call(this); // 이게 있어야 Tiger가 Animal의 능력을 쓸 수 있다 - Animal이 쓸 this를 내가 쓰겠다!
  this.pattern = "호랑이무늬";
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
}

//~ static 메서드 (한라산호랑이는 bark를 못 씀. Tiger만 쓸 수 있어)
// Tiger.bark = function () {
//   return "어흥!";
// };

//~ 인스턴스 메서드 (부모에 영향을 미치니까 한라산호랑이도 쓸 수 있어. 위에 hunt도 인스턴스 메서드)
// Tiger.prototype.bark = function () {
//   return "어흥!";
// };

const 한라산호랑이 = new Tiger("포동이");
const 금강산호랑이 = new Tiger();

console.log(한라산호랑이);
console.log(금강산호랑이);

// call에 대해 잠시 알아보자 - 첫 번째 인수는 this, 그 뒤에 인수들
// function sum(a, b, c) {
//   console.log(this)
// }

// sum('hi', 1, 2, 3);
