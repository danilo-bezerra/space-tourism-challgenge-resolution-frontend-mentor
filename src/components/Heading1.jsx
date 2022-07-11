import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 9rem;
  line-height: 36px;
  font-weight: normal;
  color: #fff;
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
