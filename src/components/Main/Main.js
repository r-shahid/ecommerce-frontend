import React from 'react';
import './Main.css';
import Products from '../Products/Products';
import Product from '../Product/Product';
import Seller from '../Seller/Seller';
import AboutUs from '../AboutUs/AboutUs';
import Cart from '../Cart/Cart';
import { Router, Switch, Route, Link } from 'react-router-dom';
const Main = (props) => {
	return (
		<Switch>
			<main>
				<Route exact path='/'>
					<Products />
				</Route>
				<Route path='/products:id'>
					<Product />
				</Route>
				<Route path='/sell'>
					<Seller />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/about'>
					<AboutUs />
				</Route>
			</main>
		</Switch>
	);
};
export default Main;
