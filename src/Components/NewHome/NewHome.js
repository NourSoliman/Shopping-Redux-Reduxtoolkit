import React from 'react'
import video from '../../Images/highqualityBG.mp4'
import { NavLink } from 'react-router-dom'
import './New.css'
const NewHome = () => {
    return (
        <div className='home-main'>
            <div className='video-overlay'>
            <video src={video} autoPlay loop muted type="video/mp4" className='video' />
            </div>
            <div className='content'>
                <h1>Dragon Games</h1>
                <p>Your Best Choice</p>
            <div >
                <button className='button'><NavLink to="/Games" className='main-button'>Check Our Games</NavLink></button>
            </div>
            </div>
        </div>
    )
}

export default NewHome