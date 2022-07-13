import styled from "styled-components";
import { NavLink as routerLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.04);
  height: 6rem;
  width: 100%;
  max-width: 830px;
  backdrop-filter: blur(35px);

  @media (max-width: 900px) {
    max-width: max-content;
    padding: 0 2.5rem;
  }

  @media (max-width:700px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    min-width: 75%;
    transform: translateX(${({ showNavbarMobile }) => showNavbarMobile ? '0px' : '100%'});

    button {
      position: absolute;
      top: 2.5rem;
      right: 2.5rem;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 700px) {
    margin-top: 10rem;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

export const Link = styled(routerLink)`
  display: block;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  text-decoration: none;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  height: 6rem;
  border: 2px solid transparent;
  border-bottom-color: ${({ isactive }) => (isactive ? "#fff" : "transparent")};
  &:hover {
    border-bottom-color: ${({ isactive }) => (isactive ? "#fff" : "#fff9")};
  }

  @media (max-width: 700px) {
    height: max-content;
  }

  span {
    font-weight: bold;
  }
`;
