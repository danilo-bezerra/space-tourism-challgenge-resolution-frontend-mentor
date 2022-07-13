import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 2.35px;
  color: #d0d6f9;
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
