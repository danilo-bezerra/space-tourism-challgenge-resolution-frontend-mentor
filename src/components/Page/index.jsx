import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ bgImage }) => bgImage.desktop});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: #333;
  min-height: 100vh;

  @media (max-width: 900px) {
    background-image: url(${({ bgImage }) => bgImage.tablet});
  }

  @media (max-width: 400px) {
    background-image: url(${({ bgImage }) => bgImage.mobile});
  }
`;

export default ({ children, bgImage }) => {
  return <Page bgImage={bgImage}>{children}</Page>;
};
