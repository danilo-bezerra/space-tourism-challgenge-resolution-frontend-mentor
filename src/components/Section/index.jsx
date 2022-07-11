import React from "react";
import styled from "styled-components";

const Section = styled.section`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ({ children }) => {
  return <Section>{children}</Section>;
};
