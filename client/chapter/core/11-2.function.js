/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기

  console.log(arguments);

  let total = 0;

  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   // total = total + arguments[i];
  //   total += arguments[i];
  // }

  // for..of 문
  // for(let value of arguments) {
  //   total += value;
  // }

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // arguments의 (태생)부모 자체를 배열로 바꿔버리면??
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments);

  // 진짜 배열 만들기
  // const arr = Array.prototype.slice.call(arguments) // 구식 브라우저 지원
  // const arr = Array.from(arguments);
  const arr = [...arguments]; // spread syntax
  console.log(arr);

  // forEach: 값을 반환하지 않음 (값을 사용하려면 변수를 따로 만들어서 사용해야 함)

  // arr.forEach(function (item) {
  //   total += item;
  // });

  // arrow function으로 바꾼다면
  // arr.forEach((item) => (total += item));

  // map: 값을 반환함 (단, 배열만 반환)
  // filter: 값을 반환함 (단, 배열만 반환)

  // reduce : 값을 반환함 (변수에 담에서 사용 가능)
  total = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  // arrow로 줄여서 표현하면
  // return arr.reduce((acc, cur) => acc + cur, 0);

  // forEach, reduce

  return total;
};

const arr = ['김다영','이경화','김용범'];


// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })


// console.log(name);


// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');
  
//   return acc;
// },[])


// console.log( name );


const name = arr.map(function(item){
  return item + '-hi'
})

console.log(name);


const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {

};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  // 호출할 때는 익명 함수와 같이 변수명으로 호출하지만
  // console.dir(함수이름) 으로 조회할 때 name이 지정된 이름으로 되어있음
  // 함수를 많이 사용할 때, 함수 이름으로 호출해야 할 때가 있음
};

// 콜백 함수 (표현)식
let cb = function(isActive, success, fail) {

  if(isActive) {
    success();
  } else {
    fail();
  }
};

cb(
  true, 
  function() { 
    console.log('성공');
  }, 
  function() { 
    console.log('실패');
  }
);

function movePage(url, success, fail) {
  if(url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail({message: '입력하신 url 주소는 없는 주소입니다.'});
  }
}

movePage(
  'https://www.naver.com',
  function(url) {
    // setTimeout(() => {
    //   location.href = url;
    // }, 3000);
    console.log(url, '해당 페이지로 넘어갑니다.');
  },
  function(err) {
    console.log(err.message);
  }
)

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 함수가 선언됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 안에 갇히나? x
// var는 함수 스코프 안에 갇히나? o

// var를 스코프 안에 가둬두기 위해서 IIFE를 사용했다..
(function a() {
  var b = 10;
})();

(function b() {
  var b = 10;
})();

// incapsulation (캡슐화)
// 모듈화
// 근데 요즘에는 잘 안 씀! 모듈화 => 모듈 프로그래밍 (import, export)
// import css from 'css.js' // module

// const MASTER = (function (g){


//   console.log( g.alert() );
//   let uuid =  'askdjazxjd!@#!@$123';


//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);




// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')



// 개발 팀장 : 박수양  getStyle, setStyle, css  => 이거 만들었으니까 가져다 써요 근데, css함수 만으로 모든게 가능 그래서 에러날 위험 있으니까 get,set 쓰지마!
// 신입 사원 : 최예은  getStyle()


const css = (function(){

  function getStyle(node,prop){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');

    return getComputedStyle(node,null)[prop]
  }

  function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
    
    node.style[prop] = value;

  }

  function css(node,prop,value){
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  }

  return css
})()