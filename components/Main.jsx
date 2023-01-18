import React from 'react'
import videoBg4 from '../assets/videoBg4.mp4'
const Main = () => {
  return (
    <div className='main'>
     <div className='overlay'></div>
     <video className='video' src={videoBg4} autoPlay loop muted />

    <div className="content">
    <h1>Welcome</h1>
    <p>Discover the Unknown</p>
    </div>
    </div>
  )
}

export default Main