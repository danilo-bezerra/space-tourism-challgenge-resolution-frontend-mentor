import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Button = styled.button`
  display: none;
  cursor: pointer;
  img {
    width: 2rem;
  }

   @media (max-width: 700px) {
    display: block;background-color: transparent;
   }
`;

export default ({ type, ...props }) => {
  return (
    <Button {...props}>
      <img src={type == 'open' ? hamburgerIcon : closeIcon} />
    </Button>
  );
};
