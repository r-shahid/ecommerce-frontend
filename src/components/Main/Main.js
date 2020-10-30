import React, { useState } from 'react';
import './Main.css';
import Products from '../Products/Products';
import Product from '../Product/Product';
import Seller from '../Seller/Seller';
import AboutUs from '../AboutUs/AboutUs';
import Cart from '../Cart/Cart';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'

//need a route to display one product by id

const Main = (props) => {
	//url variable
	const url = 'https://impulse-p3.herokuapp.com';
	// const url = 'http://localhost:3000';
	//state to hold products
	const [products, setProducts] = useState([]);
	const [toggle, setToggle] = useState(false)
	//function to fetch all products
	const getProducts = () => {
		fetch(url + '/products/')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				console.log('this is data-', data)
			});
			
	};
	//get products on page load, without creating an infinite loop
	React.useEffect(() => {
		getProducts();
	}, [toggle]);

	const emptyReview = {
		name: '',
		date: '',
		rating: null,
		review: '',
	};
	const [selectedProduct, setSelectedProduct] = useState(emptyReview)
	const emptyProduct = {
		product: '',
		img: '',
		price: 0,
		productDescription: '',
		review: [{ emptyReview }],
	};
	//const [inCart, setInCart] = useState('')
	const [cart, setCart] = useState([])

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
		console.log('product', product)
		const test = url + '/products/review/' + product.productid;
		console.log("Test", test)
		fetch(url + '/products/review/' + product.productid, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		}).then((response) => {
			console.log('response', response.json());
			// getProducts();
			setToggle(!toggle)
		});
	};
	const toggleCart = (product) => {
		axios({
            url: `${url}/products/${product._id}`,
            method: "PUT",
            data: { cart: true },
		  })
		}

		
	// const handleAddReview = (product) => {
	// 	fetch(url + '/products/review/' + product._id, {
	// 		method: 'put',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(product),
	// 	}).then((response) => getProducts());
	// };

	const selectProduct = (product) => {
		setSelectedProduct(product)
	}

	return (
		<main>
			<Switch>
				<Route 
					exact 
					path='/'
					render={props => <Products products={products} {...props}/>}
				/>
				<Route
					path='/products/:id'
					render={(rp) => (
						<Product {...rp} selectProduct={selectProduct} selectedProduct={selectedProduct} 
						handleSubmit={handleUpdate}
						toggleCart={toggleCart}
						 products={products} 
						//review={emptyReview} 
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
