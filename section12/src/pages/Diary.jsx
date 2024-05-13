// URL Parameter로 받는 법
import { useParams } from "react-router-dom";

function Diary() {
  const params = useParams();

  return <div>{params.id}</div>;
}

export default Diary;
