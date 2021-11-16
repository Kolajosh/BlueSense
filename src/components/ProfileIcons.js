import React from 'react'
import './ProfileIcons.css'
import ife from '../images/Mask-Group-4.png'
import kola from '../images/Mask-Group-5.png'
function ProfileIcons() {
    return (
        <>
           
            <div className='profile-container'>
                <div className='profile-head'>
                    <h1>
                        Team
                    </h1>
                </div>
            <div className='icons1'>
                <ul className='picons'>
                    <div className='picon1'>
                    <li>
                    <img src ={ife} alt=''></img>
                    </li>
                    <li>
                        <p>Ifeoluwa Komolafe</p>
                        <p className='blue'>Business Analyst</p>
                    </li>
                    </div>
                    <div className='picon2'>
                    <li>
                    <img src ={kola} alt=''></img>
                    </li>
                    <li>
                        <p>Kolawole Ayoola</p>
                        <p className='blue'>Web Development Intern</p>
                    </li>
                    </div>
                </ul>
            </div>
            </div>
           
        </>
    )
}

export default ProfileIcons
