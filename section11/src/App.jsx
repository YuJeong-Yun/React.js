import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
} from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// 컨텍스트는 보통 컴포넌트 외부에 선언
// (컴포넌트 내부에 선언하면 리렌더링 ㅗ딜 때 마다 새로운 컨텍스트 생성하게 됨)
export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 첫 번째 인수 : 최적화하고 싶은 함수(불필요하게 재생성되지 않도록 방지하고 싶은 함수)
  // 두 번째 인수 : deps
  // => deps가 변경 되었을 때만 함수를 다시 생성
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* provider 컴포넌트 아래에 있는 모든 컴포넌트들은 전부 다
      이 TodoContext의 데이터를 공급받을 수 있음
       */}
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
