import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 3rem;
  padding-right: 0;
`;

export const LogoLink = styled(routerLink)`
  display: block;
  width: 48px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Hr = styled.hr`
  flex: 1;
  background-color: #fff9;
  height: 1px;
  border: 0;
  transform: translateX(3rem);
  z-index: 10;
  
`;
