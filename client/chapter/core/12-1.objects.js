// function makeUser(name, age) {
//   const { a1, b2 } = { a: 10, b: 30 };

//   return { name, age };
// }

// const user = makeUser("tiger", 36);

//* shorthand 불가
// function makeUser(personName, personAge){
//   name: personName,
//   age: personAge,
// }

//* shorthand 가능
// function makeUser(name, age) {
//   name: name,
//   age: age,
// }

/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: 50 + "%",
  left: 50 + "%",
  width: 60 + "vw",
  maxWidth: 800 + "px",
  height: 40 + "vh",
  minHeight: 280 + "px",
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: "user-id-aszxcmklqwe!@#123",
  name: "tiger",
  email: "seonbeom2@gmail.com",
  isSignIn: false,
  permission: "paid", // paid | free
};

//* 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

//* 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["isSignIn"]); // get
// console.log((authUser["permission"] = "paid")); // set

// 오염
Object.prototype.SIGN = true;

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
    console.log(authUser[key]);
  }
}

// 객체의 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// console.log(keyList);

// 객체의 value만을 모아놓은 배열
let valueList = Object.values(authUser);
// console.log(valueList);

// 동작 원리
function getPropertiesList(object) {
  let result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

//* remove 제거
// const result = getPropertiesList(authUser);

// function removeProperty(object, key) {
//   object[key] = null;
// }

// removeProperty(authUser, "name"); // authUser.name = null

//* delete 삭제
// function deleteProperty(object, key) {
//   delete object[key];
// }

// deleteProperty(authUser, "name"); // delete authUser.name

function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "object"
  );
}

function removeProperty(object, key) {
  if (isObject(object)) {
    object[key] = null;
  }
}

removeProperty(authUser, "name");

// 계산된 프로퍼티 (computed property)
let calculateProperty = "phone"; // phone | tel

function createUser(name, age, phone = "010-0000-0000") {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

const user = createUser("tiger", "35");

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: false,
};

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 배열을 분해해서 쓴다. for of와 함께 자주 쓰인다.
// 순서를 바꿀 수 없음. 변수 이름은 바꿀 수 있음
const arr = [10, 100, 1000, 10000];

const [a1, ...d] = arr;
console.log(d);

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
  console.log(key);
}

const [first, second, third] = document.querySelectorAll("span"); // NodeList

// 배열 구조 분해 할당 - 월급의 총 합을 구하세요
const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
};
let total = 0;

for (let [key, value] of Object.entries(salaries)) {
  total += value;
}

console.log(total);

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서가 정해지지 않음. 변수 이름을 변경(rename)할 수 있음
// 그러나 변수처럼 쓰이는 것은 오직 key값
// 값을 넣어줄 수도 있음

const { 김지수, 이정현: lee, 박수양, 장효진, 이경화 = "500" } = salaries;

console.log(김지수);
console.log(lee); // :으로 재할당을 할 수 있음. 재할당한 이름으로 호출 가능 (단, 원래 이름으로는 호출 불가)
console.log(이경화); // 값을 주지 않고 호출하면 undefined

function createUserData(obj) {
  console.log(obj);

  const { username, age, job, gender = "male" } = obj;

  return {
    username,
    age,
    job,
    gender,
  };
}

createUserData({
  userName: "tiger",
  age: 40,
  job: "developer",
});

// function getUser(object){

//   const {userName:u} = object;

//   // u = 'tiger';

//   // console.log(u);

// }

// const data = {
//   userName:'tiger',
//   age:40,
//   job:'강사',
//   gender:'male'
// }

// getUser( data )
