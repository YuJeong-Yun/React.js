// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로(반복문, 조건문 내에서) 호출될 수 없다
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다 -> src/hooks/ 아래에 커스텀 훅 파일 위치

import useInput from "./../hooks/useInput";

function HookExam() {
  const [input, onChange] = useInput();

  return <div>HookExam</div>;
}

export default HookExam;
