import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Login() {
  const userEmailInput = useRef();
  const userPasswordInput = useRef();

  async function loginUser() {
    const loginInfo = {
      email: userEmailInput.current.value,
      password: userPasswordInput.current.value,
    };
    if (loginInfo.email !== "" && loginInfo.password !== "") {
      const loginResponse = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      if (loginResponse.status === 200) {
        const result = await loginResponse.json();
        console.log(result);

        // 로그인 처리하기
      }
    } else {
      alert("이메일 또는 비밀번호를 입력하세요.");
    }
  }

  return (
    <>
      <span>EMAIL</span>
      <input ref={userEmailInput} />
      <br />
      <span>PASSWORD</span>
      <input ref={userPasswordInput} />
      <br />
      <button>로그인</button>
    </>
  );
}
