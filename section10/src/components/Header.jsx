import "./Header.css";
import { memo } from "react";

function Header() {
  return (
    <div className="Header">
      <h3>오늘은 🐱‍💻</h3>
      <h1>{new Date().toDateString}</h1>
    </div>
  );
}

// 아래처럼 한 줄로 가능
// const memoizedHeader = memo(Header);
// export default memoizedHeader;
export default memo(Header);
