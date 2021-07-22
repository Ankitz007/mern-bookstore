import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <footer>
      <Container>
        <a href="https://github.com/Ankitz007/mern-bookstore" target="blank">
          <p>Ankit Kumar Singh & Hasifa A S</p>
          <img
            src={process.env.PUBLIC_URL + "/icons/github-32.png"}
            alt="git-hub"
          />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;

const Container = styled.div`
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    & img {
      width: 25px;
      margin-left: 10px;
    }
  }
`;
