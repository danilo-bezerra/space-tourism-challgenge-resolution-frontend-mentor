import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Page from "../../components/Page";

import Section from "../../components/Section";
import Text from "../../components/Text";
import Box from "../../components/Box";

import {
  DestinationOption,
  Image,
  DestinationNav,
  DestinationName,
  DestinationInfoContainer,
  DestinationInfo,
  Separator,
} from "./styles";

import bgImageDesktop from "../../assets/destination/background-destination-desktop.jpg";
import bgImageTablet from "../../assets/destination/background-destination-tablet.jpg";
import bgImageMobile from "../../assets/destination/background-destination-mobile.jpg";

import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

import data from "../../data.json";

const Destination = () => {
  const destinations = data.destinations;

  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );
  const [selectedDestinationImg, setSelectedDestinationImg] = useState(Moon);

  function handleChangeDestination(e) {
    const selected = destinations.find((i) => i.name === e.target.innerHTML);
    setSelectedDestination(selected);
  }

  useEffect(() => {
    switch (selectedDestination.name) {
      case "Moon":
        setSelectedDestinationImg(Moon);
        break;
      case "Mars":
        setSelectedDestinationImg(Mars);
        break;
      case "Europa":
        setSelectedDestinationImg(Europa);
        break;
      case "Titan":
        setSelectedDestinationImg(Titan);
        break;
    }
  }, [selectedDestination]);

  return (
    <Page
      bgImage={{
        desktop: bgImageDesktop,
        tablet: bgImageTablet,
        mobile: bgImageMobile,
      }}
    >
      <Header />
      <Section sectionTitle="PICK YOUR DESTINATION" sectionNumber="01">
        <Box>
          <Image src={selectedDestinationImg} />
        </Box>
        <Box alignStart="true">
          <DestinationNav>
            {destinations.map(({ name }) => (
              <DestinationOption
                onClick={handleChangeDestination}
                isActive={selectedDestination.name === name}
                key={Math.random() * 9999}
              >
                {name}
              </DestinationOption>
            ))}
          </DestinationNav>

          <DestinationName>{selectedDestination.name}</DestinationName>

          <Text>{selectedDestination.description}</Text>

          <Separator />

          <DestinationInfoContainer>
            <DestinationInfo>
              <h3>AVG. DISTANCE</h3>
              <strong>{selectedDestination.distance}</strong>
            </DestinationInfo>
            <DestinationInfo>
              <h3>EST. TRAVEL TIME</h3>
              <strong>{selectedDestination.travel}</strong>
            </DestinationInfo>
          </DestinationInfoContainer>
        </Box>
      </Section>
    </Page>
  );
};

export default Destination;
