/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowercase() === "array";

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "null";

function normalIsArray(data) {
  return Array.isArray(data);
}

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: "김다영",
    job: "프론트엔드 개발자",
    age: 25,
    imageSrc: "asdkfj31",
  },
  {
    id: 1,
    name: "김충만",
    job: "치킨집 사장",
    age: 52,
    imageSrc: "asdlkf23",
  },
  {
    id: 2,
    name: "조윤주",
    job: "화가",
    age: 12,
    imageSrc: "gsdflkj13",
  },
  {
    id: 3,
    name: "송현규",
    job: "마델",
    age: 25,
    imageSrc: "sdkfj23",
  },
];

/* 요소 순환 ---------------------------- */

// forEach - 반환값(return) X

arr.forEach((item, index) => {
  console.log(item, index);
});

// people.forEach((item) => {
//   console.log(item, item.job);
// });

const span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", function () {
    this.style.color = "red";
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

// 와! to -ed만 붙이면 원형파괴가 안 된다니..~!
const reverseArray = arr.toReversed(); // reverse()와 달리 원형파괴 x / ES2023 최신문법!
console.log(reverseArray);

console.log(arr.toSpliced(1, 2, "javascript", "css", "react")); // splice()와 달리 원형파괴 x

const a = arr.toSorted((a, b) => b - a); // sort()와 달리 원형파괴 x
console.log(a);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// map - 값을 반환
// const jobs = people.map((item) => item.job);
// console.log(jobs);

const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

// card.forEach((item) => {
//   document.body.insertAdjacentHTML("beforeend", item);
// });

const newAge = people.map((item) => item.age - 1);
console.log(newAge);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// 중복되는 것의 첫번째 값을 반환
// const findUser = people.find((item) => item.age < 30);
// console.log("findUser: ", findUser);

// findIndex
const findUser = people.findIndex((item) => item.name === "송현규");
console.log("findUser: ", findUser);

/* 요소 걸러내기 --------------------------- */

// filter
const 젊은이들 = people.filter((item) => item.age < 30);
console.log(젊은이들);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);
console.log("totalAge: ", totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age}살</div>`,
  ""
);

// console.log( template );

document.body.insertAdjacentHTML("beforeend", template);
/* string ←→ array 변환 ------------------ */

const str = "종명 예진 현주 지인 훈 은원";

// split
const stringToArray = str.split(" ");
console.log("stringToArray: ", stringToArray);

// join
const arrayToString = stringToArray.join("-");
console.log("arrayToString: ", arrayToString);
