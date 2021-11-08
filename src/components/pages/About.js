import React from 'react';
import '../../App.css';
import AboutSection from '../AboutSection';
import AdvisersIcon from '../AdvisersIcon';
import PartnerIcons from '../PartnerIcons';
import ProfileIcons from '../ProfileIcons';


function About() {
    return (
        <>
            <AboutSection />
            <ProfileIcons />
            <PartnerIcons />
            <AdvisersIcon />
        </>
    )
}

export default About
