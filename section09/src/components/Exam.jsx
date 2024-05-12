import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  // state 값 변경 => 새로운 state 값을 반환하면 됨
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

function Exam() {
  // dispatch : 발송하다, 급송하다
  // => 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // 첫 번째 인수 : 변환기, 두 번째 인수 : state 초기값
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수로 상태가 어떻게 변화되길 원하는지 전달
    // dispatch 함수에는 보통 객체 형태로 전달 -> '액션 객체'라고 함
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default Exam;
