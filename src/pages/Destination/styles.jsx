import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
`;
export const DestinationNav = styled.nav`
    display: flex;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 2rem;
`;
export const DestinationOption = styled.button`
  background-color: transparent;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  height: 34px;
  border: 3px solid transparent;
  border-bottom-color: #fff;
`;

export const DestinationName = styled.h2`
  font-size: 100px;
  font-family: "Bellefair", serif;
  color: #fff;
  font-weight: normal;
  text-transform: uppercase;
  width: 100%;
  line-height: 115px;
`;

export const DestinationInfoContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 2rem;

`;

export const DestinationInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
