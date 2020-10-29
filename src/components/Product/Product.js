import React from 'react';
import './Product.css';

const Product = (props) => {
	console.log('product props- ', props);
	const [formData, setFormData] = React.useState(props.review);
	//something is not quite right here, the filter is showing all products
	//not just the one that was clicked
	const product = props.products.filter(
		(product) => product.name === props.match.params.name
	);

	console.log('result of product filter - ', product);
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
	return (
		<div className='product'>
			<div>
				<img src={props.products.img} alt='#' />
			</div>
			<div className='product-info'>
				<h3>{props.products.product}</h3>
				<h4>{props.products.price}</h4>
				<p>{props.products.productDescription}</p>
				{/* this button will need a Link or a handler to pass item to cart */}
				<button>Add to Cart</button>
			</div>
			<hr />
			<div className='reviews'>
				<div>
					<h2>REVIEWS</h2>
					<div className='each-review'>
						<p className='name'>{formData.name}</p>
						<p className='date'>{formData.date}</p>
						<p className='rating'>{formData.rating}</p>
						<p className='review'>{formData.review}</p>
					</div>
				</div>
                <h4>Write a Review</h4>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						name='name'
						value={formData.name}
						onChange={handleChange}
					/>
					<br />
					<input
						type='date'
						placeholder='Date'
						name='date'
						value={formData.date}
						onChange={handleChange}
					/>
					<br />
					<label for='rating'>Rating:</label>
					<select name='rating' value={formData.rating} onChange={handleChange}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
					<br />
					<textarea
                        rows='5'
						type='text'
						placeholder='Review'
						name='review'
						value={formData.review}
						onChange={handleChange}
					/>
					<input className='submit' type='submit' value='Submit' />
				</form>
			</div>
		</div>
	);
};
export default Product;
