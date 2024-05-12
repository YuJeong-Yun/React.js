import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";

function List() {
  const { todos } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  // 의존성 배열 : deps (useEffect에도 사용되었음)
  // deps에 포함된 값이 변경되었을 때에만 첫 번째 인수로 전달한 콜백 함수를 다시 실행
  // => 콜백 함수 안에 메모이제이션 하고 싶은 연산 넣어주면 됨
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List ✔</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
