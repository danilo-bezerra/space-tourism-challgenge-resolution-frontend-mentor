import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Text = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  line-height: 36px;
  font-weight: normal;
  color: #d0d6f9;
  max-width: 450px;
  align-self: flex-start;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export default ({ children }) => {
  return <Text>{children}</Text>;
};
