// 커스텀 훅 예시
// 커스텀 훅 -> 함수 이름 앞에 use 접두사 붙이면 됨

import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
