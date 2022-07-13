import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;

  @media (max-width: 450px) {
    max-width: 170px;
  }
`;
export const DestinationNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    margin: auto;
    margin-bottom: 1rem;
    width: max-content;
  }
`;
export const DestinationOption = styled.button`
  background-color: transparent;
  font-size: 1rem;
  font-family: "Barlow Condensed", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  height: 3rem;
  border: 3px solid transparent;
  border-bottom-color: ${({ isActive }) => (isActive ? "#fff" : "#fff5")};
  transition: 0.5s all;
  &:hover {
    border-bottom-color: #fff;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const DestinationName = styled.h2`
  font-size: 100px;
  font-family: "Bellefair", serif;
  color: #fff;
  font-weight: normal;
  text-transform: uppercase;
  width: 100%;
  line-height: 115px;

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 56px;
    line-height: normal;
  }
`;

export const Separator = styled.hr`
  background-color: #fff5;
  padding: 0.5px;
  width: 100%;
  margin: 1rem 0;
`;

export const DestinationInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const DestinationInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-family: "Bellefair", serif;
    font-size: 28px;
    font-weight: normal;
    color: #fff;

    text-transform: uppercase;
  }
`;
