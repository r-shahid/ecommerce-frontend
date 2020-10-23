import React from 'react';
// import './style.css';
import Products from '../Products/products';

function Home(props) {
	console.log('props-Home', props);
	return (
		<div>
			<h1 className='title'>
				Your next purchase is an impulse click away...
			</h1>
			<Products />
		</div>
	);
}

export default Home;
