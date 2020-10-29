import React from 'react';
import './Seller.css';
import headerimg from '../images/seller_header.png';
import altheaderimg from '../images/alt_seller_header.png';
import sidebar from '../images/sidebar.png';

const Seller = (props) => {
	console.log('seller-props', props);
	const [formData, setFormData] = React.useState({
		name: '',
		img: '',
		price: null,
		description: '',
	});

	//  const handleSubmit = (e) => {
	//  	e.preventDefault()
	//      props.handleSubmit(formData)
	//      props.history.push('/')
	//  }
	const handleChange = (e) => {
		console.log('handleChange', formData);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<div className='seller'>
			<img src={headerimg} alt='header' className='header-img' />
			<img src={altheaderimg} alt='altheader' className='alt-header' />
			<h2>SELL ON IMPULSE</h2>
			<div className='form-and-sidebar'>
				<div className='form-and-info'>
					<form onSubmit={props.handleSubmit}>
						<input
							type='text'
							placeholder='ITEM NAME'
							name='name'
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							type='text'
							placeholder='IMAGE URL'
							name='img'
							value={formData.img}
							onChange={handleChange}
						/>
						<input
							type='number'
							placeholder='PRICE'
							name='price'
							value={formData.price}
							onChange={handleChange}
						/>
						<textarea
							rows='5'
							type='text'
							placeholder='ITEM DESCRIPTION'
							name='description'
							value={formData.description}
							onChange={handleChange}
						/>
						<input className='submit' type='submit' value='SELL' />
					</form>
					<br />
					<p className='terms-conditions'>
						By clicking "Sell" you confirm that you have read the IMPULSE Terms
						and Conditions and Privacy Policy. IMPULSE will take a variable
						percentage of all profits, depending on item popularity and seller
						success. Sellers may not direct customers to an external website for
						future sales. Sellers may not provide coupon codes as an incentive
						for positive reviews. Sellers caught engaging in these acts will not
						be able to post new items for sale for a length of time, depending
						on severity of their crimes. Sellers with repeated offenses will
						have past profit payments revoked and will be blacklisted from all
						eCommerce sites.{' '}
					</p>
				</div>
				<div className='sidebar'>
					<img src={sidebar} alt='sidebar' />
				</div>
			</div>
		</div>
	);
};
export default Seller;
