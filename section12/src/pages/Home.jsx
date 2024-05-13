// Query String으로 받는 법
import { useSearchParmas } from "react-router-dom";

function Home() {
  const [params, setParmas] = useSearchParmas();

  return <div>{params.get("value")}</div>;
}

export default Home;
