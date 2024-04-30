import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 두 번째 인수로 전달한 배열(=의존성 배열=dependency array=deps)에 들어 있는 값이 바뀌면
  // SideEffect로서 첫 번째 인수로 전달한 콜백 함수를 실행시켜 줌
  useEffect(() => {
    console.log(count);
  }, [count, input]); // useState 값이 변화할 때 마다 출력됨

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
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
