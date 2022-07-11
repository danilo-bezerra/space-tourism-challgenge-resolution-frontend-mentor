import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

import hamburguerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const Button = styled.button`
  display: none;
  img {
    width: 1.75rem;
  }

   @media (max-width: 768px) {
    display: block;background-color: transparent;
   }
`;

export default ({ showNavbarMobile, ...props }) => {
  return (
    <Button {...props}>
      <img src={showNavbarMobile ? closeIcon : hamburguerIcon} />
    </Button>
  );
};
