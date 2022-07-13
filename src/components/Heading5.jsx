import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.h5`
  font-family: "Barlow Condensed",sans-serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 4.72px;
  color: #d0d6f9;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    text-align: center;
  }
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
