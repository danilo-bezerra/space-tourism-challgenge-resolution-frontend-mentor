import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Box = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;

  @media (max-width: 450px) {
    justify-content: flex-start;
    gap: .5rem;
  }
`;

export default ({ children }) => {
  return <Box>{children}</Box>;
};
