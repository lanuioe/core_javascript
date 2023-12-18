/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
// 생성자 === 컴포넌트

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    // eat은 꼭 값을 반환(return)해줘야 함
    return this.stomach;
  }

  set eat(value) {
    // set은 꼭 값(value)을 받아줘야 함
    this.prey = value;
    this.stomach.push(value);
  }
}
const animal = new Animal("포동이");

// extends: Tiger class는 Animal을 포함할거야 (상속받을거야)
class Tiger extends Animal {
  constructor(name) {
    // 부모의 cunstructor을 가져와 실행해줘. (매개변수 name을 전달)
    super(name); // Animal.call(this)와 같은 개념이지만, call은 생성자 함수 / super은 class
    this.pattern = "호랑이 무늬";
  }

  // static method
  static bark() {
    return "어흥!🐯";
  }

  // instance method
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger();
