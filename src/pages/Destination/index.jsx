import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Page from "../../components/Page";

import bgImageDesktop from "../../assets/destination/background-destination-desktop.jpg";
import bgImageTablet from "../../assets/destination/background-destination-tablet.jpg";
import bgImageMobile from "../../assets/destination/background-destination-mobile.jpg";

import Section from "../../components/Section";
import ButtonExplore from "../../components/ButtonExplore";
import Text from "../../components/Text";
import Heading1 from "../../components/Heading1";
import Heading4 from "../../components/Heading5";
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

import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

import data from "../../data.json";
import Subheading2 from "../../components/Subheading2";

const Destination = () => {
  const [destinations, setDestinations] = useState(data.destinations);
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
              <Subheading2 >
                AVG. DISTANCE
              </Subheading2>
              <strong>{selectedDestination.distance}</strong>
            </DestinationInfo>
            <DestinationInfo>
              <Subheading2>EST. TRAVEL TIME</Subheading2>
              <strong>{selectedDestination.travel}</strong>
            </DestinationInfo>
          </DestinationInfoContainer>
        </Box>
      </Section>
    </Page>
  );
};

export default Destination;
