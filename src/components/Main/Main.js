import React from 'react';
import './Main.css';
import Products from '../Products/Products';
import Product from '../Product/Product';
import Seller from '../Seller/Seller';
import AboutUs from '../AboutUs/AboutUs';
import Cart from '../Cart/Cart';
import { Switch, Route} from 'react-router-dom';
const Main = (props) => {
	return (
		<main>
			<Switch>
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
			</Switch>
		</main>
	);
};
export default Main;
