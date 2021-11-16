import React from 'react'
import './LearningSection.css'
import learning from '../images/learning.png'
import {Link} from 'react-router-dom'

function LearningSection() {
    return (
        <>
            <div className='learning-img'>
                <img src = {learning} alt=''></img>
            </div>
            <div className='button-learning'>
            <button className='big-button'>
                        <Link to ='/contact' className='big-btn-link'> 
                        Schedule Consultation <i class="fas fa-caret-right"></i>
                        </Link>
                    </button>
            </div>
            <div className ='learning-container'>
                <div className='learning-head'>
                    <h1>Learning</h1>
                </div>
                <div className='learning1-body-1'>
                    <p>
                    In a world where competition can come from any geography or sector, and customer loyalty can dissolve in a 
                    click, the most reliable path to growth is meeting customers’ unmet needs. <span className='blue'>Blusense</span> learning shows companies 
                    how to fill those gaps.
                    </p>
                </div>
                <div className='learning1-body-2'>
                    <p>
                    We understand the importance of creating seamless and simple customer experiences. To deliver on that, 
                    we involve customers at every point of the process to understand what matters most to them through 
                    industry expertise, commercial insights, and analytical rigor. 
                    </p>
                    <p>
                    <span className='blue'>Bluesense</span> learning brings together expertise in technology, management, design, strategy, 
                    organisation, and analytics to help clients reinvent themselves. We partner with our clients to 
                    build, operate, and then transfer newly acquired skills, so clients can thrive over the long term.
                    </p>
                    <p>
                    Our talent and tools enable us to quickly invent, prototype, launch, and scale new concepts for our 
                    clients. We do this in ways that are collaborative, agile, and focused on driving sustained <span className='blue'>growth.</span>
                    </p>
                </div>
            </div>

            <div className ='learning-container-2'>
                    <h1>15+</h1>
                    <div className='learning2-body-div'>
                    <p className='blue-learning'>Organisations using<br></br>
                    Bluesense Learning training curriculums</p>
                    </div>

                    <h1>50+</h1>
                    <div className='learning2-body-div'>
                    <p className='blue-learning'>Training curriculums curated.</p>
                    </div>
            </div>
        </>
    )
}

export default LearningSection
