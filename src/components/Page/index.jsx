import React from "react";
import { Page } from "./styles";

export default ({ children, bgImage }) => {
  return <Page bgImage={bgImage}>{children}</Page>;
};
