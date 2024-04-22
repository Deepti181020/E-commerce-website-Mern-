import React from 'react'
import './Hero.css'
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asset/arrow.png';
import hero_img from '../Asset/hero_image.png'

const Hero = () => {
  return (
    <div className='hero flex h-screen'>
      <div className="left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="Error1" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>   
      </div>
      <div className="latest-btn">
        <div>
            Latest Collections
        </div>
        <img src={arrow_icon} alt="Error2" />

      </div>

      <div className="right">
        <img src={hero_img} alt="Error3" />
      </div>
    </div>
  )
}

export default Hero
