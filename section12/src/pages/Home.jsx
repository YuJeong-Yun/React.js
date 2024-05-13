// Query String으로 받는 법
import { useSearchParams } from "react-router-dom";

function Home() {
  const [params, setParmas] = useSearchParams();

  return <div>{params.get("value")}</div>;
}

export default Home;
