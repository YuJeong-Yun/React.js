// 컴포넌트 리렌더링 되는 3가지 경우
// 1. 자신이 관리하는 state의 값이 변경되었을 때
// 2. 자신이 제공받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 됨

import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
