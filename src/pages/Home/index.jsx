import React from 'react'
import Header from '../../components/Header'

import Page from '../../components/Page'

import bgImage from '../../assets/home/background-home-desktop.jpg'

const Home = () => {
  return (
    <Page bgImage={bgImage}>
      <Header />
    </Page>
  );
}

export default Home