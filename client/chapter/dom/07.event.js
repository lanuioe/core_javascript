/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode(".first");

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log("클릭!");
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log("클릭!");
}

// first.addEventListener("click", handleClick);

// getNode(".second").addEventListener("click", () => {
//   first.removeEventListener("click", handleClick);
// });

// function bindEvent(node, type, handler) {
//   if (typeof node === "string") node = getNode(node);
//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const remove = bindEvent(".first", "click", handleClick);

// getNode(".second").addEventListener("click", remove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode(".ground");
const ball = getNode("#ball");

function handleClickBall({ offsetX: x, offsetY: y }) {
  // const { offsetX: x, offsetY: y } = e;
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${
    y - ball.offsetHeight / 2
  }px)`;
}

ground.addEventListener("click", handleClickBall);

ground.addEventListener("mousemove", ({ offsetX: x, offsetY: y }) => {
  // console.log(x,y);

  // 이건 실제 DOM에 div를 만드는 방법이기 때문에
  // canvas를 사용하는 것이 좋다
  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">(╬▔皿▔)╯</div>
  `;

  // ground.insertAdjacentHTML("beforeend", template);
});

ground.addEventListener(
  "mousemove",
  debounce(() => {
    console.log(this);
  })
);

function debounce(callback, limit = 100) {
  let timeout;

  // 클로저
  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this.arg);
    }, limit);
  };
}

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

funcB.apply(funcA, [1, 2, 3]);
