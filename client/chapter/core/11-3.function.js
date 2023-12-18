/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// 일반함수에는 arguments가 있지만, 화살표함수는 arguments가 없음
// 대신에! () 안에 ...rest를 쓰면 됨 (rest 이름은 마음대로 가능! 보통 rest나 args를 많이 씀)
// 왜 rest냐? (a, ...rest)로 a를 제외한 나머지를 가져올 수 있기 때문에
// 함수 선언 → 화살표 함수 (표현)식
//                rest parameter
let calcAllMoney = (...args) => {

  // Normal Function
  // return args.reduce(function(acc,cur){
  //   return acc + cur;
  // },0)

  // Arrow Function
  return args.reduce = ((acc,cur) => {
    return acc + cur
  }
, 0)};

let calcAllMoney2 = (...args) => args.reduce((acc,cur) => acc + cur, 0);

const result = calcAllMoney(1000,5000,4500,15000);

console.log( result );
// 화살표 함수와 this

// 일반 함수의 양면의 얼굴 - 생성자

// 일반 함수를 new fn() 으로 사용하면 생성자가 되기 때문에,
// new Fn() 이렇게 대문자로 쓰기로 함!

// arrow function ↔ Class (arrow function으로는 생성자를 만들 수 없다)
// const Button = (name) => {
//   this.name = name;
// }

// const b = new Button('tiger');

// 다시 한번 정리해보자!!

// 일반 함수
// - constructor 내장 o → 생성자처럼 사용 가능
// - this: 나를 호출한 대상을 this로 찾음
// 주로 객체의 메서드로 사용됨 → this를 찾기 위해

// 화살표함수
// - constructor 내장 x → 생성자처럼 사용 불가능
// - this: this 자체를 바인딩하지 않음 (갖지 않음)
// 주로 메서드 내의 함수로 사용됨 → 내 상위 this를 가져오기 위해

const user = {
  total:0,
  name:'상원',
  age: 13,
  address: '서울시 중랑구 면목동',
  grades: [80,90,100],
  totalGrades(){ // concise method: constructor 비내장. 일반 function으로 해도 되지만 constructor의 용량을 줄여주기 위해 제일 많이 쓰이는 방법

    // this = user
    
    this.grades.forEach(item=> this.total += item)

    return this.total
    
    // console.log( '일반 함수 :' , this);

    // const sayHi =()=>{
    //   console.log('sayHi : ' , this);
    // }

    // sayHi()
  }
}

const result2 = user.totalGrades();

console.log(result2);

// 메서드 체이닝  : jQuery 
// user.totalGrades().grades


// $().fadeOut().css().animate()






/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  
  let result = 1;

  for(let i = 0; i < powerCount; i++) {
    result *= numeric
  }
  return result;
};

pow(2, 53);


// let powExpression = (numeric, powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc) => {
//     return acc * numeric
//   })
// }

let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce( acc => acc * numeric, 1);

powExpression(2, 53);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {

  let result = "";

  for(let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
}; 

repeat('hello👋', 3);

let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc + text, '');



// map : 배열을 받아 새로운 배열을 반환(생성)하기 위해 

// filter : 배열을 받아 필터링된 값들만 배열로 반환하기 위해 

// reduce : 배열을 받아 무언가의 값으로 만들기 위해 

// forEach : 배열을 받아 순환하기 위해 (값 반환 x)