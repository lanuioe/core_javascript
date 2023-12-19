export function copy(text) {
  // promise 비동기 통신 - return 필수
  return navigator.clipboard.writeText(text);
}
