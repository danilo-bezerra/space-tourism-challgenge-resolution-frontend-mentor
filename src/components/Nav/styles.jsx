import styled from "styled-components";
import { NavLink as routerLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.04);
  height: 6rem;
  width: 100%;
  max-width: 830px;
  backdrop-filter: blur(5px);
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
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
  border-bottom-color: ${({ isActive }) => (isActive ? "#fff" : "transparent")};
  &:hover {
    border-bottom-color: ${({ isActive }) => (isActive ? "#fff" : "#fff9")};
  }

  span {
    font-weight: bold;
  }
`;
