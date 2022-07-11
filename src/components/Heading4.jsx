import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.h4`
  font-family: "Barlow Condensed",sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 4.75px;
  color: #d0d6f9;
  text-transform: uppercase;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
