import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
//import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import WinnerBadge from '../components/sections/WinnerBadge';

const Home = () => {

  return (
    <>
      <WinnerBadge />    
      <Hero topDivider className="illustration-section-01" />  
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <GenericSection topDivider />
      {/* //<Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;