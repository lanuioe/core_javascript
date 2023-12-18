/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm("영화 봤니?");

// if (!didWatchMovie) {
//   let goingToWatchMovie = confirm("그럼 영화 볼래?");

//   if (goingToWatchMovie) {
//     let withWho = prompt("누구랑 볼거야?");

//     if (withWho === "you") {
//       console.log("헉 나도 조아~!");
//     }
//   } else {
//     console.log("관심없어..^^");
//   }
// }

// 삼항식으로 표현해보자
let didWatchMovie = "no";
let goingToWatchMovie = "yes";

let movieMessage = didWatchMovie.includes("yes")
  ? "그거 재밌더라! 같이 볼래?"
  : goingToWatchMovie.includes("yes")
    ? "우왕 언제보러갈까?"
    : "난 별로..";

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `<div>${isActive ? "안녕" : "잘가"}</div>`;

  console.log(template);

  node.insertAdjacentHTML("beforeend", template);
}
