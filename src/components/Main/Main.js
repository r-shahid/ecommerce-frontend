import React, { useState } from 'react';
import './Main.css';
import Products from '../Products/Products';
import Product from '../Product/Product';
import Seller from '../Seller/Seller';
import AboutUs from '../AboutUs/AboutUs';
import Cart from '../Cart/Cart';
import { Router, Switch, Route, Link } from 'react-router-dom';
const Main = (props) => {
	const [products, setProducts] = useState([])
	
	const emptyReview = {
		name: '',
		date: '',
		rating: 0, 
		review: ''
	}
	const emptyProduct = {
		product: '',
		img: '',
		price: 0,
		productDescription: '',
		review: [
			{emptyReview}
		],
	}
	const handleUpdate = (review) => {
		console.log('handleUpdate', handleUpdate)
	}
	const handleCreate = (product) => {
		console.log('handleCreate', handleCreate)
	}
	return (
		<main>
			<Switch>
				<Route exact path='/'>
					<Products />
				</Route>
				<Route 
					path='/products:id'
					render={(rp) => (
						<Product
							{...rp}
							handleSubmit={handleUpdate}
							review={emptyReview}
						/>
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
				<Route 
					path='/cart'>
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
