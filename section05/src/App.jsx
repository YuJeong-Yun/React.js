import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  // props로 전달할 값이 많다면 객체&spread 연산자 이용해 전달
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        {/* children 이라는 props로 전달됨 */}
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
