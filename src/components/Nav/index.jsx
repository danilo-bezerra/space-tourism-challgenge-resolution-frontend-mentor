import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonNavbar from "../ButtonNavbar";
import { Nav, NavLinks, Link } from "./styles";

export default ({ showNavbarMobile, onBtnNavbarPress }) => {
  return (
    <Nav showNavbarMobile={showNavbarMobile}>
      <NavLinks>
        <li>
          <Link to="/">
            {" "}
            <span>01</span> HOME
          </Link>
        </li>
        <li>
          <Link
            to="/destination"
          >
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
        <ButtonNavbar
          showNavbarMobile={showNavbarMobile}
          onClick={onBtnNavbarPress}
        />
      </NavLinks>
    </Nav>
  );
};
