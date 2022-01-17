import React from 'react'
import { Link } from 'react-router-dom'
import '../Notfoundpagecomponent.css'

function custom404() {
    return (
        <>
            <div className='error404'>
                <h2>404 Page Not Found!</h2>
                <p>The page you're looking for does not exist! Click 
                    <Link to='/'> here</Link> to return to the homepage</p>
            </div>
        </>
    )
}

export default custom404
