import React from 'react';
import './Hwwsection.css';

function Hwwsection() {
    return (
        <>
        <div className='hww-container'>
            <h1 className='hww-heading'>
                How We Work
            </h1>
            <p className='hww-body'> 
            How we work we support organisations through a detailed diagnostic-approach; researching organisational problems to find out what 
            challenges your company+teams on a day-to-day; then build out proactive solutionsthat utilise our expertise + experience to solve your 
            most pressing problems and attain set goals & objectives.
            </p>
            <div className='hww-foot-div'>
            <h1 className='hww-foot'>45 <span class="icon-right-arrow-123"></span>3.5 MONTHS <span class="icon-right-arrow-123"></span> $100M+</h1>
            </div>
            <div className='hww-foot-div'>
                <ul className='hww-foot-ul'>
                    <li className='hww-foot-list'>
                    Projects Executed
                    </li>
                    <li>
                    Average Project Length
                    </li>
                    <li>
                    Added to Client Bottomline
                    </li>
                </ul>
            </div>
        </div>   
        </>
    )
}

export default Hwwsection;
