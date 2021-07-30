import React, { useState } from "react";
import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../../_actions/user_action";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function LoginPage() {
  // 리덕스
  // const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);
  };

  // 서버에 넣을 데이터
  // let body = {
  //   email: Email,
  //   password: Password,
  // };

  // axios.post("api/users/login", body) {
  // 서버에서 포스트
  // }

  return (
    <Container>
      <LoginForm onSubmit={onSubmitChange}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailChange} />
        <label>password</label>
        <input type="password" value={Password} onChange={onPasswordChange} />
        <br />
        <button type="submit">Login</button>
      </LoginForm>
    </Container>
  );
}

export default LoginPage;
