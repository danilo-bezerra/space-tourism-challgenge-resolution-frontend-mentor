import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import Page from "../../components/Page";

import bgImageDesktop from "../../assets/Crew/background-Crew-desktop.jpg";
import bgImageTablet from "../../assets/Crew/background-Crew-tablet.jpg";
import bgImageMobile from "../../assets/Crew/background-Crew-mobile.jpg";

import Section from "../../components/Section";

import Box from "../../components/Box";
import {
  CrewRole,
  CrewName,
  CrewBio,
  CrewSelection,
  CrewOptionBox,
  CrewOption,
  CrewImage,
} from "./styles";

import data from "../../data.json";

import imgDouglas from "../../assets/crew/image-douglas-hurley.png";
import imgMark from "../../assets/crew/image-mark-shuttleworth.png";
import imgVictor from "../../assets/crew/image-victor-glover.png";
import imgAnousheh from "../../assets/crew//image-anousheh-ansari.png";

const Crew = () => {
  const crews = data.crew;

  const [selectedCrew, setSelectedCrew] = useState(crews[0]);
  const [selectedCrewImg, setSelectedCrewImg] = useState("");

  function handleChangeCrew(e) {
    const selected = crews.find((i) => i.name === e.target.value);
    setSelectedCrew(selected);
  }

  useEffect(() => {
    switch (selectedCrew.name) {
      case "Douglas Hurley":
        console.log(1);
        setSelectedCrewImg(imgDouglas);
        break;
      case "Mark Shuttleworth":
        setSelectedCrewImg(imgMark);
        break;
      case "Victor Glover":
        setSelectedCrewImg(imgVictor);
        break;
      case "Anousheh Ansari":
        setSelectedCrewImg(imgAnousheh);
        break;
    }
  }, [selectedCrew]);

  return (
    <Page
      bgImage={{
        desktop: bgImageDesktop,
        tablet: bgImageTablet,
        mobile: bgImageMobile,
      }}
    >
      <Header />
      <Section
        sectionTitle="MEET YOUR CREW"
        sectionNumber="02"
        columnReverse={true}
      >
        <Box width={550}>
          <CrewRole>{selectedCrew.role}</CrewRole>
          <CrewName>{selectedCrew.name}</CrewName>
          <CrewBio>{selectedCrew.bio}</CrewBio>

          <CrewSelection>
            {crews.map((crew, index) => (
              <CrewOptionBox
                key={index}
                checked={crew.name === selectedCrew.name}
              >
                <CrewOption
                  type="radio"
                  value={crew.name}
                  onChange={handleChangeCrew}
                  checked={
                    crew.name === selectedCrew.name
                  } /*selected={selectedCrew.name === crew.name} value={crew}*/
                />
              </CrewOptionBox>
            ))}
          </CrewSelection>
        </Box>
        <CrewImage src={selectedCrewImg} />
      </Section>
    </Page>
  );
};

export default Crew;
