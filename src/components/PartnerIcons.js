import React from 'react'
import christian from '../images/Mask Group.png'
import emmanuel from '../images/Mask Group-6.png'
import seye from '../images/Mask Group-7.png'
import natasha from '../images/Mask Group-3.png'
import './PartnerIcons.css'

function PartnerIcons() {
    return (
        <>
        <div className='partner-head'>
                    <h1>
                        Partners
                    </h1>
                </div>
            <div className='partner-container'>
               <div className='partner-icons'>
                   <div className='front-icon'>
                    <img src ={christian} alt=''></img>
                    </div>
                    <div className='back-icon'>
                    <p className='ppp'>Christian is a consultant + coach. He helps organisations 
                        in the continent build people.  As Lead Partner for Reuben 
                        & Company Project, he helps build teams to work seamlessly, 
                        analyse (through concrete research), the best strategies for 
                        growth and advise startups on how to effectively improve human 
                        energy.</p>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>

            <div className='partner-container'>
               <div className='partner-icons'>
                   <div className='front-icon'>
                    <img src ={emmanuel} alt=''></img>
                    </div>
                    <div className='back-icon'>
                    <p>Emmanuel is a multiple CISCO certified IT Speacialist with 8+ years experience in planning, 
          implementing and supporting network and security infrastructure in Canada, UK, and Nigeria. 
          He has experience with Saipem, Siemens UK, to mention but a few.</p>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>

            <div className='partner-container'>
               <div className='partner-icons'>
                   <div className='front-icon'>
                    <img src ={seye} alt=''></img>
                    </div>
                    <div className='back-icon'>
                    <p>Seye is an award winning still-life photographer and environmentalist. 
      Inspired by nature, culture and happenings around her, she enjoys telling 
      stories with her images. She tells these stories throught photography that 
      is as thought-provoking as it is beautiful. She is a skilled creative artist 
      who works with vision and compassion.</p>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>

            <div className='partner-container'>
               <div className='partner-icons'>
                   <div className='front-icon'>
                    <img src ={natasha} alt=''></img>
                    </div>
                    <div className='back-icon'>
                    <p>Seye is an award winning still-life photographer and environmentalist. 
      Inspired by nature, culture and happenings around her, she enjoys telling 
      stories with her images. She tells these stories throught photography that 
      is as thought-provoking as it is beautiful. She is a skilled creative artist 
      who works with vision and compassion.</p>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>

            <div className='partner-desc'>
                    <div>
                    <p>Christian Reuben</p>
                    <p className='blue'>Lead Partner</p>
                    </div>
                    <div className='partner-second-desc'>
                    <p>Emmanuel Thom-manuel</p>
                    <p className='blue'>Operations Partner</p>
                    </div>
                    <div className='partner-third-desc'>
                    <p>Seye Jimo</p>
                    <p className='blue'>Creative Partner</p>
                    </div>
                    <div className='partner-fourth-desc'>
                    <p>Natasha Oyibo PhD</p>
                    <p className='blue'>Research Partner</p>
                    </div>
                </div>

        </>
    )
}

export default PartnerIcons
