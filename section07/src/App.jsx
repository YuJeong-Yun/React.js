import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 컴포넌트 마운트 여부 담은 useRef

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // 빈 deps

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    // 탄생 때는 제외하고 리렌더링 될 때만 실행시키기 위한 코드
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // deps 생략

  // 3. 언마운트 : 죽음
  // Even.jsx 참조
  // useEffect(() => {
  //   return () => {
  //    여기에 unmount될 때 실행 할 코드 작성
  //   };
  // }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
