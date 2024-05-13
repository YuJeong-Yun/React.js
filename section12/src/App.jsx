// 이미지는 assets 폴더 아래에 -> 브라우저가 캐싱해서 이미지 최적화 가능
// but 이미지가 많을 때에는 캐싱 용량이 많아지므로 public 폴더 아래에 두는게 나을 수도 있음

import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFount from "./pages/NotFound";

import { getEmotionImage} from "./util/get-emotion-image";


function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    // 여기는 모든 페이지에 공통으로 들어가는 부분
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
      </div>
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
