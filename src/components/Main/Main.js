import React, { useState } from 'react';
import './Main.css';
import Products from '../Products/Products';
import Product from '../Product/Product';
import Seller from '../Seller/Seller';
import AboutUs from '../AboutUs/AboutUs';
import Cart from '../Cart/Cart';
import { Router, Switch, Route, Link } from 'react-router-dom';
const Main = (props) => {
	//url variable
	const url = 'https://impulse-p3.herokuapp.com';
	//state to hold products
	const [products, setProducts] = useState([]);
	//function to fetch all products
	const getProducts = () => {
		fetch(url + '/products/')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
			});
	};
	//get products on page load, without creating an infinite loop
	React.useEffect(() => {
		getProducts();
	}, []);

	const emptyReview = {
		name: '',
		date: '',
		rating: 0,
		review: '',
	};
	const emptyProduct = {
		product: '',
		img: '',
		price: 0,
		productDescription: '',
		review: [{ emptyReview }],
	};
	const handleCreate = (newProduct) => {
		fetch(url + '/products/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newProduct),
		}).then(() => {
			getProducts();
		});
	};
	//handleUpdate to update a product when form is clicked
	const handleUpdate = (product) => {
		fetch(url + '/products/' + product._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		}).then((response) => getProducts());
	};

	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Products products={products} />
				</Route>
				<Route
					path='/products:id'
					render={(rp) => (
						<Product {...rp} handleSubmit={handleUpdate} review={emptyReview} />
					)}
				/>
				<Route
					path='/sell'
					render={(rp) => (
						<Seller
							{...rp}
							product={emptyProduct}
							handleSubmit={handleCreate}
						/>
					)}
				/>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/about'>
					<AboutUs />
				</Route>
			</Switch>
		</main>
	);
};
export default Main;
