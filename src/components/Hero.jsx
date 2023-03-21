import React from "react";
import HeroPageBanner from "./HeroPageBanner";
import Carousal from "./Carousal";

const Hero = () => {
  //#82197A  className='w-full bg-gradient-to-l from-[#450072] to-[#82197A] '
  return (
    <>
      <HeroPageBanner/>
      <Carousal/>
    </>
  );
};

export default Hero;
