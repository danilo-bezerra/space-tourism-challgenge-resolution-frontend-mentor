import styled from "styled-components";
import Text from "../../components/Text";

/*
CrewRole
CrewName
CrewBio
CrewSelection
CrewOption
CrewImage
*/

export const CrewRole = styled.h4`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: normal;
  color: #fff8;
  width: 100%;

  text-transform: uppercase;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 24px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const CrewBio = styled(Text)``;

export const CrewName = styled.h4`
  font-family: "Bellefair", serif;
  font-size: 56px;
  font-weight: normal;
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  margin: 1rem 0;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 40px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
    margin: 0.5rem 0;
  }
`;

export const CrewSelection = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding: 2.5rem 0;

  @media (max-width: 900px) {
    width: max-content;
    margin: auto;
  }
`;

export const CrewOptionBox = styled.div`
  background-color: ${({ checked }) => (checked ? "#fff" : "#fff5")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`;

export const CrewOption = styled.input`
  opacity: 0;
  transform: scale(1.5);
`;

export const CrewImage = styled.img`
  max-height: 681px;
  align-self: flex-end;

  @media (max-width: 900px) {
    margin-top: -2.5rem;
    max-width: 433px;
    align-self: center;
  }

  @media (max-width: 450px) {
    margin-top: 0;
    max-height: 233px;
  }
`;
