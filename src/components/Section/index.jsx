import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
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

  @media (max-width: 450px) {
    flex-direction: ${({ columnReverse }) =>
      columnReverse ? "column-reverse" : "column"};
  }
`;

const SectionTitle = styled.h2`
  font-family: "Bellefair", serif;
  font-size: 28px;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;

  span {
    font-weight: bold;
    opacity: 0.5;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export default ({
  children,
  sectionTitle,
  sectionNumber,
  columnReverse,
  className,
}) => {
  return (
    <Container className={className}>
      {sectionTitle !== undefined && (
        <SectionTitle>
          <span>{sectionNumber}</span> {sectionTitle}
        </SectionTitle>
      )}
      <Section columnReverse={columnReverse} className={className}>
        {children}
      </Section>
    </Container>
  );
};
