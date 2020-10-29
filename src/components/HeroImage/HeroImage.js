import React from 'react'
import './HeroImage.css'
import impulse from '../images/impulse.png'
import Carousel from '../Carousel/Carousel.js'

const HeroImage = () => {
    
    return (
			<>
				<div className='hero-image'>
					<img src={impulse} alt='placeholder' />
				</div>
				<div className='carousel'>
					<Carousel />
				</div>
			</>
		);
}

export default HeroImage