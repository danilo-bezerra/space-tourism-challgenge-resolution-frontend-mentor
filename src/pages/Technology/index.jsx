import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Page from "../../components/Page";

import bgImageDesktop from "../../assets/technology/background-technology-desktop.jpg";
import bgImageTablet from "../../assets/technology/background-technology-tablet.jpg";
import bgImageMobile from "../../assets/technology/background-technology-mobile.jpg";

import Section from "../../components/Section";

import Box from "../../components/Box";
import {
  SectionTitle,
  Container,
  Nav,
  NavButton,
  InfoContainer,
  SubHeading,
  H3,
  Description,
  Picture,
  Image,
} from "./styles";

import data from "../../data.json";

import imgLaunchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import imgLaunchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";

import imgSpaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import imgSpaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";

import imgSpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import imgSpaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const techs = data.technology;

  const [selectedTech, setSelectedTech] = useState(techs[0]);
  const [selectedTechImg, setSelectedTechImg] = useState("");

  function handleChangeTech(name) {
    const selected = techs.find((i) => i.name === name);
    setSelectedTech(selected);
  }

  useEffect(() => {
    switch (selectedTech.name) {
      case "Launch vehicle":
        setSelectedTechImg({
          landscape: imgLaunchVehicleLandscape,
          portrait: imgLaunchVehiclePortrait,
        });
        break;
      case "Spaceport":
        setSelectedTechImg({
          landscape: imgSpaceportLandscape,
          portrait: imgSpaceportPortrait,
        });
        break;
      case "Space capsule":
        setSelectedTechImg({
          landscape: imgSpaceCapsuleLandscape,
          portrait: imgSpaceCapsulePortrait,
        });
        break;
    }
  }, [selectedTech]);

  return (
    <Page
      bgImage={{
        desktop: bgImageDesktop,
        tablet: bgImageTablet,
        mobile: bgImageMobile,
      }}
    >
      <Header />
      <SectionTitle>
        <span>03</span> SPACE LAUNCH 001
      </SectionTitle>
      <Container>
        <Nav>
          {techs.map(({ name }, index) => (
            <NavButton
              key={index}
              onClick={() => handleChangeTech(name)}
              selected={name === selectedTech.name}
            >
              {index + 1}
            </NavButton>
          ))}
        </Nav>

        <InfoContainer>
          <SubHeading>THE TERMINOLOGY IS</SubHeading>
          <H3>{selectedTech.name}</H3>
          <Description>{selectedTech.description}</Description>
        </InfoContainer>

        <Picture>
          <source
            media="(max-width:900px)"
            srcSet={selectedTechImg.landscape}
          />
          <Image src={selectedTechImg.portrait} alt="Flowers" />
        </Picture>
      </Container>
    </Page>
  );
};

export default Technology;
