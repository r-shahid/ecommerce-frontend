import React, {useState, useEffect} from 'react';
import './Product.css';
// import { useEffect } from 'react';

const Product = (props) => {
	console.log('product props- ', props);
	const [formData, setFormData] = useState(props.review);
	const [product, setProduct] = useState({})
	//something is not quite right here, the filter is showing all products
	//not just the one that was clicked
	useEffect(() => {
		console.log("props.products", props.products)
		const item = props.products.filter(
			(product) => product._id === props.match.params.id
		);
		console.log('result of product filter - ', item);
		setProduct(item[0])
	}, [])
	
	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(formData);
		//have to figure out how to update this url to reflect the actual id
		//of the selected item to post the review - this handleSubmit is for the
		//review form submit
		//also should this update the item in the database?
		props.history.push('/products/:id');
	};
	const handleChange = (e) => {
		console.log('handleChange', formData);
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	//nothing is actually being rendered here except a broken image link
	//I suspect it has something to do with the filter not outputting just one
	//product or maybe I've referenced it incorrectly here
	//I'm kind of lost
	console.log("product", product)
	return (
		<div className='product'>
			<div>
				<img src={product.img} alt='#' />
			</div>
			<div className='product-info'>
				<h3>{product.product}</h3>
				<h4>{product.price}</h4>
				<p>{product.productDescription}</p>
				{/* this button will need a Link or a handler to pass item to cart */}
				<button>Add to Cart</button>
			</div>
			<hr />
			<div className='reviews'>
				<div>
					<h2>REVIEWS</h2>
					<div>
						<p>
							{formData.name} <span>{formData.date}</span> {formData.rating}
						</p>
						<p>{formData.review}</p>
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Date'
						name='date'
						value={formData.date}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Rating'
						name='rating'
						value={formData.rating}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Review'
						name='review'
						value={formData.review}
						onChange={handleChange}
					/>
					<input type='submit' value='Submit' />
				</form>
			</div>
		</div>
	);
};
export default Product;
