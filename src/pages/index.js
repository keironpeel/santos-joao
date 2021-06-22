import * as React from "react";
import styled from "styled-components";
import "../style.css";

const Outer = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #2151a6;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  text-align: center;
  color: white;
  font-family: "DM Serif Display", serif;
`;

const Heading1 = styled.h1`
  font-size: 4rem;
`;

const Heading2 = styled.h2`
  font-size: 3rem;
`;

const IndexPage = () => {
  return (
    <Outer>
      <Wrapper>
        <title>João Santos</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        ></link>
        <Heading1>João Santos</Heading1>
        <Heading2>Coming Soon</Heading2>
      </Wrapper>
    </Outer>
  );
};

export default IndexPage;
