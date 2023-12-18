/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

const first = getNode(".first");

/* 문서 대상 확인 */
// - matches
// - contains

console.log(first.matches("span")); // target에 항목(selector)이 있어? = first가 span이야?
console.log(getNode("h1").contains(first)); // target(부모) 안에 자식 노드가 있어? = h1이 first를 포함하고 있어?
