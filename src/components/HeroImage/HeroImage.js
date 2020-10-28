import React from 'react'
import './HeroImage.css'
import impulse from '../images/impulse.png'

const HeroImage = () => {
    return(
        <div className='hero-image'>
            <img src={impulse} alt="placeholder" />
        </div>
    )
}

export default HeroImage