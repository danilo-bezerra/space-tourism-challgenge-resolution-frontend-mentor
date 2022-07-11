import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  min-height: 400px;
  max-width: 450px;

  @media (max-width: 768px) {
    min-height: fit-content;
    margin-top: 7.5rem;
  }
`;

export default ({ children }) => {
  return <Box>{children}</Box>;
};
