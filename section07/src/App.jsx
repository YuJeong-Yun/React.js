// 리액트 컴포넌트의 라이프사이클
// 1. Mount
//  - 컴포넌트가 탄생하는 순간 = 화면에 렌더링 되는 순간 :: 서버에서 데이터를 불러오는 작업
// 2. Update
//  - 컴포넌트가 다시 렌더링되는 순간 = 리렌더링 될 때 :: 변경 값 콘솔에 출력
// 3. UnMount
//  - 컴포넌트가 화면에서 사라지는 순간 = 렌더링에서 제외되는 순간 :: 컴포넌트가 사용하던 메모리 정리

// useEffect
// 리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 React Hook

import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
