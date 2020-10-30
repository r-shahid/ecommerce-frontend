import React from 'react'
import './AboutUs.css'
import TM from '../images/TM.png'
import EG from '../images/EG.png'
import RS from '../images/RS.png';
import ZY from '../images/ZY.png';

const AboutUs = () => {
    return (
			<div className='about-us'>
				<h1>Who We Are</h1>
				<div className='about-member'>
					<img className='member-img' src={TM} alt='member' />
					<div className='member-text'>
						<p>
							Frontend - React component main technician - React architect
							designer - Styling of web app
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={EG} alt='member' />
					<div className='member-text'>
						<p>
							Backend - Server side - connecting with Postman/Mongo and API -
							Assistant with React components - React architect designer
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={RS} alt='member' />
					<div className='member-text'>
						<p>
							Product Lead / Product Manager - Pull and commit approvals - Front
							end - React component technician - Styling of web app
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={ZY} alt='member' />
					<div className='member-text'>
						<p>Setup and foundation - Web App planner</p>
					</div>
				</div>
			</div>
		);
}
export default AboutUs