import styled from "styled-components";
import Text from "../../components/Text";

export const SectionTitle = styled.h2`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto 0 auto;
  max-height: max-content;

  span {
    font-weight: bold;
    opacity: 0.5;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 2.5rem;
    order: 2;
  }
`;

export const NavButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? "#000" : "#fff")};

  font-family: "Bellefair", serif;
  font-size: 32px;
  letter-spacing: 2;

  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 444px;

  @media (max-width: 900px) {
    order: 2;
  }
`;

export const SubHeading = styled.h4`
  color: #d0d6f9;
  font-size: 16px;
  letter-spacing: 2.7px;
  font-weight: normal;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 14px;
    letter-spacing: 2.36px;
  }
`;

export const H3 = styled.h3`
  font-family: "Bellefair", serif;
  font-weight: normal;
  color: #fff;
  font-size: 56px;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const Description = styled(Text)``;

export const Picture = styled.picture`
  display: block;
`;
