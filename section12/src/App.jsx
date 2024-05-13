// - URL Parmaeter : ~/product/1
// - Query String :  ~/search?q=검색어

import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFount from "./pages/NotFound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 new 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    // 여기는 모든 페이지에 공통으로 들어가는 부분
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        {/* URL Parameter 는 /:이름 이렇게 설정 */}
        {/* Query String은 받는 곳에서만 설정하면 됨 */}
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<NotFount />} />
      </Routes>
    </>
  );
}

export default App;