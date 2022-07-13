import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 9rem;
  line-height: 10.75rem;
  font-weight: normal;
  color: #fff;

  @media (max-width: 450px) {
    line-height: 100px;
    font-size: 80px;
    text-align: center;
  }
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
