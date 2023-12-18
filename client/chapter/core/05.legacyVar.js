/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

// var는 변수의 중복 선언을 허용합니다

// 선언하기 전 사용할 수 있는 var

var outside = "outside";
{
  console.log(outside);

  var inside = "inner";
  console.log(inside);
}

// let으로 바꾼다면...
console.log(inside);

let outside2 = "outside";
{
  console.log(outside2);

  let inside2 = "inner";
  console.log(inside2);
}

// console.log(inside2); // not undefined.

// var은 변수의 중복 선언 허용

var a = 10;
console.log(a);

var a = 5;
console.log(a);
