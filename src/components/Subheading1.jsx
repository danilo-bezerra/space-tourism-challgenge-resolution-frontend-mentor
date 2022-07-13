import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Heading = styled.p`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;

  span {
    color: #fff9;
    font-weight: bold;
  }

  @media (max-width:900px) {
    margin-top: 5rem;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export default ({ children }) => {
  return <Heading>{children}</Heading>;
};
