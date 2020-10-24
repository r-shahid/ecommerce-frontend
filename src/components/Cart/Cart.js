import  React from 'react';
import './Cart.css'
import placeholder from "../images/placeholder.jpg"

const Cart = (props) => {
	// console.log('props-Cart', props);
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
