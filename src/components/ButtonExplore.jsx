import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

const Button = styled.button`
    background-color: transparent;
`

const Link = styled(routerLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  height: 17rem;
  width: 17rem;
  font-family: "Bellefair", serif;
  font-size: 2rem;
  color: #0b0d17;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover {
    outline: 5.5rem solid #fff5;
    transition: all 0.5s;
  }

  @media (max-width: 768px) {
    height: 14rem;
    width: 14rem;
    margin-top: 3rem;

    &:hover {
      outline: 4rem solid #fff5;
      transition: all 0.5s;
    }
  }
`;

export default () => {
    return (
      <Button>
        <Link to="/destination">EXPLORE</Link>
      </Button>
    );
}