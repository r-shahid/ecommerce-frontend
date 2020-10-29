import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import givein from '../images/givein.png'
import halloween from '../images/halloween.png';
import thanks from '../images/thanks.png';
// import './Carousel.css'

export class BootstrapCarousel extends Component {
	render() {
		return (
				<div className='container-fluid'>
					<Carousel>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src={givein}
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className='d-block w-100'
								src={halloween}
							/>
						</Carousel.Item>

						<Carousel.Item>
							<img
								className='d-block w-100'
								src={thanks}
							/>
						</Carousel.Item>
					</Carousel>
				</div>
		);
	}
}

export default BootstrapCarousel;
