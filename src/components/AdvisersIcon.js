import React from 'react'
import './AdvisersIcon.css'
import olaleye from '../images/Mask Group-1.png'
import garza from '../images/Mask Group-2.png'

function AdvisersIcon() {
    return (
        <>
            <div className='profile-container'>
                <div className='profile-head'>
                    <h1>
                        Advisers
                    </h1>
                </div>
               <div className='profile-icons'>
                    <img src ={olaleye} alt=''></img>
                    <img src ={garza} alt='' className='iprofile-2'></img>
                </div>
                <div className='profile-desc'>
                    <div>
                    <p>Andrew Olaleye</p>
                    <p className='blue'>Ex. Mckinsey (5yrs)</p>
                    <p className='blue'>Harvard MBA</p>
                    </div>
                    <div className='second-desc'>
                    <p>Andrew Garza</p>
                    <p className='blue'>Ex. Bain (5yrs)</p>
                    <p className='blue'>Stanford MBA</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvisersIcon
