import "./App.css";
import { useState } from "react";

function App() {
  // useState
  // 초기 값을 인수로 받음
  // 두 개의 요소를 담은 배열 반환 [state 현재값, state 값 변화시키는 함수]
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}

export default App;
