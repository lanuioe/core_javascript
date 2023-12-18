//* querySelector
const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// console.log( button );

//* eventListener 이벤트 핸들러  => click : 객체  , scroll : 객체

function timer() {}

setTimeout(timer, 3000);

setTimeout(timer, 3000);

let isOpend = false;

function handleMenu(e) {
  e.preventDefault();

  // 메뉴에게 클래스를 넣어준다 is-active
  // menu.classList.toggle('is-active')
  // menu.classList.remove('is-active')

  // 들어갔다 나갔다가 달라야한다면 if문으로 써서 코드 분리를 해야 될 것
  if (!isOpend) {
    menu.classList.add("is-active");
  } else {
    menu.classList.remove("is-active");
  }

  isOpend = !isOpend;
}

button.addEventListener("click", handleMenu);

// Node.addEvent...

// classList

// preventDefault
