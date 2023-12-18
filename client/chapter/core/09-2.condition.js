/* ------------------- */
/* Logical Operators   */
/* ------------------- */

// let age = +prompt("나이를 입력해주세요");
// if (14 <= age && age <= 90) {
//   console.log("14세 이상 90세 미만이시군요!");
// }

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// logical AND Assigment 논리곱 할당 연산자
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical OR Assigment 논리합 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !value;
reverseValue = !!value; // 다시 원래대로

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
// 빈 배열, 빈 객체는 true. 모두 true라서 마지막이 반환

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

// 로그인 구현하기
function login() {
  let userName = prompt(`Who's there?`);

  if (!userName) return;

  if (userName?.toLowerCase() === "admin") {
    let psd = prompt(`Password?`);
    if (psd?.toLowerCase() === "theMaster") {
      alert("Welcome!");
    } else if (psd.replace(/\s*/g, "") === "" || psd === null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (userName.replace(/\s*/g, "") === "" || userName === null) {
    alert("Canceled");
  } else {
    alert(`I don't know`);
  }
}

login();

// 공백을 찾아줘 /\s*/g   그리고 빈문자로 만들어줘
// replaceAll(" ","") 도 가능!
