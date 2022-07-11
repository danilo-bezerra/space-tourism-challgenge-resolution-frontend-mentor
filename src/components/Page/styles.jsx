import styled from "styled-components";
import img from "../../assets/home/background-home-desktop.jpg";

export const Page = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-attachment: fixed;
  background-color: #fff9;
`;
