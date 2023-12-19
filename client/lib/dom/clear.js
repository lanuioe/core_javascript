import { getNode } from "./getNode.js";

// 기본 내보내기
export default function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.nodeName === "INPUT" || node.nodeName === "TEXTAREA") {
    node.value = "";
    return;
  }
  node.textContent = "";
}

// 이렇게 내보낼 수도 있음
// export defalut clearContents
