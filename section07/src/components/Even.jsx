import { useEffect } from "react";

function Even() {
  useEffect(() => {
    // useEffect의 콜백 함수가 반환하는 함수를 클린업, 정리함수 라고 함
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수</div>;
}

export default Even;
