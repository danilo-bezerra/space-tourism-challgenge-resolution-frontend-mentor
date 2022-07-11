import React from "react";
import Header from "../../components/Header";

import Page from "../../components/Page";

import bgImageDesktop from "../../assets/home/background-home-desktop.jpg";
import bgImageTablet from '../../assets/home/background-home-tablet.jpg'
import bgImageMobile from "../../assets/home/background-home-mobile.jpg";

import Section from "../../components/Section";
import ButtonExplore from "../../components/ButtonExplore";
import Text from "../../components/Text";
import Box from "../../components/Box";
import Heading1 from "../../components/Heading1";
import Heading4 from "../../components/Heading4";

const Home = () => {
  return (
    <Page bgImage={{
      desktop: bgImageDesktop,
      tablet: bgImageTablet,
      mobile: bgImageMobile,
    }}>
      <Header />
      <Section>
        <Box>
          <Heading4>SO, YOU WANT TO TRAVEL TO SPACE</Heading4>
          <Heading1>SPACE</Heading1>
          <Text>
            So, you want to travel to Space Let’s face it; if you want to go to
            space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we’ll
            give you a truly out of this world experience!
          </Text>
        </Box>
        <Box>
          <ButtonExplore />
        </Box>
      </Section>
    </Page>
  );
};

export default Home;
