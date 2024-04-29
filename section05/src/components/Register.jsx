// useRef는 값이 바뀌어도 리렌더링 안 됨

import { useState, useRef } from "react";

function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  const countRef = useRef(0); // 수정 횟수 카운트
  const inputRef = useRef(0);

  const onChange = (e) => {
    countRef.current++;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef} // 이 input 태그가 렌더링하는 DOM 요소가 inputRef라는 레퍼런스 오브젝트에 저장 됨
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.county} onChange={onChange}>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onchange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}

export default Register;
