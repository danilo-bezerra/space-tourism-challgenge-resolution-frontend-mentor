import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

export const Header = styled.header`
  padding: 2.5rem 0;

  @media (max-width: 900px) {
    padding: 0;
    padding-left: 1rem;
  }

   @media (max-width: 700px) {
    padding: 1rem;
   }
`;

