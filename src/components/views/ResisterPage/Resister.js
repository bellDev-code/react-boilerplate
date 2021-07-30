import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ResisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function Resister() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitChange = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 올바르지 않습니다.");
    }

    // console.log("Email", email);
    // console.log("Name", name);
    // console.log("Password", password);
    // console.log("ConfirmPassword", confirmPassword);

    // let body = {
    //   email: email,
    //   name: name,
    //   password: password,
    // };

    // axios.post("/api/users/resister", body)
  };

  return (
    <Container>
      <ResisterForm onSubmit={onSubmitChange}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailChange} />
        <label>Name</label>
        <input type="text" value={name} onChange={onNameChange} />
        <label>password</label>
        <input type="password" value={password} onChange={onPasswordChange} />
        <label>ConfirmPassword</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <br />

        <button type="submit">회원가입</button>
      </ResisterForm>
    </Container>
  );
}

export default Resister;
