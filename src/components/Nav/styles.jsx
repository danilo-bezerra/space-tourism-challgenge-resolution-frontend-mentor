import styled from "styled-components";
import { NavLink as routerLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled.ul`
  background-color: rgba(255, 255, 255, 0.04);
  height: 6rem;
  width: 100%;
  max-width: 830px;
  backdrop-filter: blur(35px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  padding: 0 2.5rem;

  @media (max-width: 900px) {
    max-width: max-content;
  }

  @media (max-width: 700px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    min-width: 75%;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10rem;
    transform: translateX(100%);
    padding-left: 2.5rem;
    transition: transform 0.55s;

    &.active {
      transform: translateX(0);
    }

    button {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }
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
  transition: 0.5s all;
  &:hover {
    border-bottom-color: ${({ isactive }) => (isactive ? "#fff" : "#fff9")};
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
    height: max-content;
  }

  span {
    font-weight: bold;
  }
`;

export const LogoLink = styled(routerLink)`
  display: block;
  width: 48px;
  height: 48px;
  margin-left: 3rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Hr = styled.hr`
  flex: 1;
  background-color: #fff9;
  height: 1px;
  border: 0;
  transform: translateX(3rem);
  z-index: 10;

  @media (max-width: 900px) {
    display: none;
  }
`;
