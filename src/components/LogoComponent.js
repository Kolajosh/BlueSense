import React from 'react'
import mvx from '../images/MVX-Logo.png'
import life from '../images/Lifestores_Healthcare_Logo.png'
import hippo from '../images/payhippo-logo.png'
import hugo from '../images/Hugo_.png'
import leeds from '../images/leeds-logo.png'
import medecins from '../images/medecins-sans-frontieres-logo.png'
import icrc from '../images/ICRC-logo.png'
import './LogoComponent.css'



function LogoComponent() {
    return (
        <>
        <div>
            <h1 className='section-heading' >Some Clients</h1>
        </div>

        <div className='logo-container'>
            <div className='logo-box'>
                <img src={mvx} alt='mvx-logo' className='logo-img'></img>
            </div>
            <div className='logo-box'>
                <img src={life} alt='lifestore-logo' className='logo-img'></img>
            </div>
            <div className='logo-box'>
                <img src={hippo} alt='payhippo-logo' className='logo-img'></img>
            </div>
        </div>


        <div className ='logo-container-2'>
            <div className='logo-box-2'>
                <img src={hugo} alt='hugo-logo' className='logo-img'></img>
            </div>
            <br></br>
            <div className='logo-box-2'>
                <img src={icrc} alt='ICRC-logo' className='logo-img'></img>
            </div>
            <div className='logo-box-2'>
                <img src={medecins} alt='medecins-logo' className='logo-img'></img>
            </div>
            <div className='logo-box-2'>
                <img src={leeds} alt='leeds-logo' className='logo-img'></img>
            </div>
        </div>
        </>
    )
}

export default LogoComponent
