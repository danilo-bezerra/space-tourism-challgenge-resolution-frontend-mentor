import React, { useState } from "react";
import Nav from "../Nav";
import LogoImg from "../../assets/shared/logo.svg";

import { Header, LogoLink, Hr } from "./styles";
import ButtonNavbar from "../ButtonNavbar";

export default () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  const handleToggleMobileNavbar = () => {
    setShowNavbarMobile((s) => !s);
  };

  return (
    <Header>
      <LogoLink to="/">
        <img src={LogoImg} alt="" />
      </LogoLink>
      <Hr />
      <Nav
        showNavbarMobile={showNavbarMobile}
        onBtnNavbarPress={handleToggleMobileNavbar}
      />
      <ButtonNavbar showNavbarMobile={showNavbarMobile} onClick={handleToggleMobileNavbar}/>
    </Header>
  );
};
