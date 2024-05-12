import "./TodoItem.css";
import { memo } from "react";

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

// 참조변수(객체, 함수 등)를 props로 받을 때
// -> App이 리렌더링 되면 함수도 새롭게 생성하고 props로 넘겨주는 함수 값도 매번 바뀜
//    기본적으로 memo는 얕은 복사를 하므로 두 번째 인수로 콜백 함수 전달
//    그러면 props를 자기가 판단하는 게 아니라 콜백 함수를 통해 이전과 지금이 바뀌었는지 판단함
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // True -> Pros가 바뀌지 않았다고 판단 -> 리렌더링 X
  // Flase -> Pros가 바뀌었다고 판단 -> 리렌더링 O

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});


// 참고로 memo처럼 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화나 메모이제이션 같은
// 추가적인 기능을 덧붙여 새로운 컴포넌트를 반환하는 메서드를 고차 컴포넌트, HOC(Higher Order Component) 라고 부름