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
               <div className='profile-icons'>
                    <img src ={ife} alt=''></img>
                    <img src ={kola} alt='' className='iprofile-2'></img>
                </div>
                <div className='profile-desc'>
                    <div>
                    <p>Ifeoluwa Komolafe</p>
                    <p className='blue'>Business Analyst</p>
                    </div>
                    <div className='second-desc'>
                    <p>Kolawole Ayoola</p>
                    <p className='blue'>Web Develpment Intern</p>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default ProfileIcons
