import React from "react";
import Nav from "../Nav";
import LogoImg from "../../assets/shared/logo.svg";

import { Header, LogoLink, Hr } from "./styles";

export default () => {
  return (
    <Header>
      <LogoLink to="/"> 
        <img src={LogoImg} alt="" />
      </LogoLink>
      <Hr />
      <Nav />
    </Header>
  );
};
