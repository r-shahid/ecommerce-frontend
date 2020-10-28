import React from 'react'
import './HeroImage.css'
import placeholder from '../images/placeholder.jpg'

const HeroImage = () => {
    return(
        <div className='hero-image'>
            <img src={placeholder} alt="placeholder" />
        </div>
    )
}

export default HeroImage