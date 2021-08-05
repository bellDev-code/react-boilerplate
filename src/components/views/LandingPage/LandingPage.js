import React from "react";
import styled from "styled-components";
// import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

// const logOutChange = () => {
//   axios.get("/api/users/logout");
// };

function LandingPage() {
  return (
    <Container>
      시작 페이지
      <button>로그아웃</button>
    </Container>
  );
}

export default LandingPage;
