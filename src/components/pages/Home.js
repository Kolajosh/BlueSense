import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Hwwsection from '../Hwwsection';
import LogoComponent from '../LogoComponent';

export default function Home() {
  return (
    <>
    <HeroSection />
    <Cards />
    <LogoComponent />
    <Hwwsection/>
    </>
  );
}
