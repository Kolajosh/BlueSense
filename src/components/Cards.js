import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../images/icon.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import './Cards.css';


function Cards() {
    return (
        <>
        <h1 className ='card-heading'>
            Core Competencies
        </h1>
            <div className="flex-container">
    <div className="item-1">
           <Link to ='/strategy' className='card-links'> <div className="icon">
            <img src={icon} alt='icon'></img>
        </div>
        <p className="subtitle-flex">Strategy</p>
        </Link>
        <div className="middle-text">
        As a consulting firm, we take pride in carrying out<br></br>
        thorough research on our clients businesses and/or<br></br>
        industries. We also assess your team to draw inferences<br></br>
        from past and present performances. This is to ensure that<br></br>
        we come up with the best possible (recommended)<br></br> 
        strategies that aids the sustainability of these businesses in<br></br> 
        the long run.
        </div>
        
    </div>
    <div className="item-2">
    <Link to='/learning' className='card-links'>
        <div className="icon">
            <img src={icon1} alt='icon1'></img>
        </div>
        <p className="subtitle-flex">Learning</p>
        </Link>
        <div className="middle-text">
        At BlueSense, we offer learning services ranging from<br></br>
        seminars to team training, and even to personal training for<br></br>
        executives. This is done with the sole aim of improving on<br></br>
        these teams, encouraging reflection to yield results, and<br></br>
        motivating teams for potential achievements.
        </div>
         
    </div>
    <div className="item-3">
        <Link to='/advisory' className='card-links'>
        <div className="icon">
        <img src={icon2} alt='icon2'></img>
        </div>
        <p className="subtitle-flex">Advisory</p>
        </Link>
        <div className="middle-text">
        As a team, we are constantly looking to help<br></br>
        businesses thrive in the fast changing business world,<br></br>
        and we do this by giving recommendations backed<br></br>
        with research, to our clients.
        </div>
        
    </div>
</div>

</>
    )
}

export default Cards;
