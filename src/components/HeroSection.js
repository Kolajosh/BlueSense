import React from 'react'
import home from '../images/homepic.png'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={home} alt='homepic'></img>
            <h1>Thinking about transforming<br></br>your company? We know how</h1>
            <p>BlueSense is a business intelligence management consulting firm. We<br></br> 
                are the trusted advisors to some of the country&rsquo;s leading startups,<br></br>  
                technology companies and a handful of international institutions. We<br></br> 
                work with leading organisations like yours across private, public and<br></br> 
                nonprofit sectors to produce bankable results. Our expertise,<br></br> 
                experience, scope, and knowledge of organisational challenges allow<br></br> 
                us to address problems that no one else can.</p><br></br> 
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--primary' butttonSize='btn--large'>
                        <Link to ='/contact' className='btn-link'> 
                        Schedule Consultation <i class="fas fa-angle-right"></i>
                        </Link>
                    </Button>
                </div>
        </div>
    )
}

export default HeroSection;
