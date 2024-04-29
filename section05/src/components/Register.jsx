// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [county, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={county} onChange={onChangeCountry}>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>

      <div>
        <textarea onChange={onChangeBio} />
      </div>
    </div>
  );
}

export default Register;
