import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import ButtonNavbar from "../ButtonNavbar";
import { Nav, NavLinks, Link, LogoLink, Hr } from "./styles";

import LogoImg from "../../assets/shared/logo.svg";

export default () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);
  const navLinksRef = useRef();

  const handleToggleNavbar = () => {
    if (navLinksRef.current.className.includes(' active')) {
      navLinksRef.current.className = navLinksRef.current.className.replace(' active', '')
    } else {
      navLinksRef.current.className += " active";
    }
    console.log({ depois: navLinksRef.current.className });
  };

  return (
    <Nav>
      <LogoLink to="/">
        <img src={LogoImg} alt="" />
      </LogoLink>
      <Hr />
      <NavLinks ref={navLinksRef}>
        <li>
          <Link to="/">
            {" "}
            <span>01</span> HOME
          </Link>
        </li>
        <li>
          <Link to="/destination">
            {" "}
            <span>02</span> DESTINATION
          </Link>
        </li>
        <li>
          <Link to="/crew">
            {" "}
            <span>03</span> CREW
          </Link>
        </li>
        <li>
          <Link to="/technology">
            {" "}
            <span>04</span> TECHNOLOGY
          </Link>
        </li>
        <li>
          <ButtonNavbar onClick={handleToggleNavbar} />
        </li>
      </NavLinks>
      <ButtonNavbar onClick={handleToggleNavbar} type="open"/>
    </Nav>
  );
};
