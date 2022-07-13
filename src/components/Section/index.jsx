import React from "react";
import styled from "styled-components";
import Subheading1 from "../Subheading1";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 450px) {
    max-width: 327px;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;

  

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

export default ({ children, sectionTitle, sectionNumber }) => {
  return (
    <Container>
      {sectionTitle !== undefined && (
        <Subheading1>
          <span>{sectionNumber}</span> {sectionTitle}
        </Subheading1>
      )}
      <Section>{children}</Section>
    </Container>
  );
};
