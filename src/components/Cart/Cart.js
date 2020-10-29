import  React, {useState, useEffect} from 'react';
import './Cart.css'
import placeholder from "../images/placeholder.jpg"

const Cart = (props) => {
	const [cart, setCart] = useState({})
	// console.log('props-Cart', props);
	useEffect(() => {
		console.log("props.products", props.products)
		const item = props.products.filter(
			(product) => product._id === props.match.params.id
		);
		console.log('result of product filter - ', item);
		setCart(item[0])
	}, [])
	return (
		<div className='cart-content'>
			<h1>Cart</h1>
			{/* later these items will be pulled from whatever is in the cart --> same way that favorites is handled */}
			<div className='each-product'>
				<div className='product-info'>
					<p>PRODUCT NAME</p>
					<p>$100</p>
				</div>
				<div>
					<img src={placeholder} />
				</div>
			</div>
			<div className='each-product'>
				<div className='product-info'>
					<p>PRODUCT NAME</p>
					<p>$100</p>
				</div>
				<div>
					<img src={placeholder} />
				</div>
			</div>
			<div className='each-product'>
				<div className='product-info'>
					<p>PRODUCT NAME</p>
					<p>$100</p>
				</div>
				<div>
					<img src={placeholder} />
				</div>
			</div>
			<div className='each-product'>
				<div className='product-info'>
					<p>PRODUCT NAME</p>
					<p>$100</p>
				</div>
				<div>
					<img src={placeholder} />
				</div>
			</div>
			<button>CHECKOUT</button>
		</div>
	);
}

export default Cart
