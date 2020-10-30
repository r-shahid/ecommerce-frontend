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
							<b>
								Frontend - React component main technician - React architect
							</b>
							<br /> I am a Full Stack Developer living in the beautiful
							Shenandoah Valley in central Virginia with my two Akitas. I thrive
							on structure and stability, and yet, here I am embarking on a new
							journey to make things for the web. Clean lines and simplicity are
							the hallmarks of my work.
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={EG} alt='member' />
					<div className='member-text'>
						<p>
							<b>
								Backend - Server side - connecting with Postman/Mongo and API -
								Assistant with React components - React architect designer
							</b>
							<br /> Hi my name is Esteban Gonzalez, and am an aspiring Software
							Engineer throughout my schooling I thought I had always wanted to
							become a nurse because of the good pay and benefits but later
							after two years in college came to realize that it was something I
							didn’t want to do because it wasn’t something I was truly
							motivated to do, that’s when I did a lot of thinking and came to
							the conclusion that I wanted to become a Software Engineer because
							of the variety of projects you can create that can benefit almost
							every type of company not just in common category of company and
							the feeling of achieving something after every project is amazing.
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={RS} alt='member' />
					<div className='member-text'>
						<p>
							<b>
								Product Lead / Product Manager - Pull and commit approvals -
								Front end - React component technician - Styling of web app{' '}
							</b>
							<br /> I'm an NYU graduate with a BA in Mathematics. From a young
							age, I always gravitated towards art and expression, whether
							that’s making my own art or experiencing that of others. When I'm
							not coding, I like to work across many mediums, from different
							kinds of paint to yarn and thread. Given the ongoing pandemic, I
							have been working through my yarn stash by knitting socks for
							myself and my family.
						</p>
					</div>
				</div>
				<div className='about-member'>
					<img className='member-img' src={ZY} alt='member' />
					<div className='member-text'>
						<p>
							<b>Setup and foundation - Web App planner</b>
							<br />
							Hi! I'm Zack and I graduated from University of Arizona with a
							Pre-Law degree. I realized through internship and classes that I
							didn't want to be a lawyer, even with my high paying internship,
							and that I wanted to be someone who was involved in tech. Both
							coding and working with technology is a huge interest of mine and
							I will always strive to learn more.
						</p>
					</div>
				</div>
			</div>
		);
}
export default AboutUs