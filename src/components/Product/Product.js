import React, {useState, useEffect} from 'react';
import './Product.css';
// import { useEffect } from 'react';

const Product = (props) => {
	console.log('product props- ', props);
	const [formData, setFormData] = useState(props.selectedProduct);
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
		// e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log("setformdata", formData)
	};

	// // useEffect(() => {
	// 	console.log("props.products", props.products)
	// 	const review = props.products.map(
	// 		(ele, ind) => {

	// 		}
	// 	);
	// 	console.log('result of product filter - ', item);
	// 	setProduct(item[0])
	// // }, [])
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
				{/* <p>{product.reviews}</p> */}
				{/* this button will need a Link or a handler to pass item to cart */}
				<button>Add to Cart</button>
			</div>
			<hr />
			<div className='reviews'>
				<div>
					<h2>REVIEWS</h2>
					{props.products.map((ele, ind) => (
						console.log("ele", ele.reviews),
						<>
						{ele.reviews.filter(
							(product) => product._id === props.match.params.id
						),
						console.log("products", product.reviews)
						}
							<p>{product.toString()}</p>
						</>
						// <div className='each-review'>
						// 	<p className='name'>{formData.name}</p>
						// 	<p className='date'>{formData.date}</p>
						// 	<p className='rating'>{formData.rating}</p>
						// 	<p className='review'>{formData.review}</p>
						// </div>
					))}
				</div>
                <h4>Write a Review</h4>
				<form onClick={() => {
					props.selectProduct(product)
					props.history.push('/products/:id')
				}}
				onSubmit={handleSubmit}>
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
