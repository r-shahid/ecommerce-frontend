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
			<h1>Your Cart</h1>
			{/* later these items will be pulled from whatever is in the cart --> same way that favorites is handled */}
			<div className='cart-page'>
				<div className='products'>
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
				</div>
				<div className='vertical-line'></div>
				<div className='checkout'>
					<div className='bonus-info'>
						<h4>Total</h4>
						<p>total sum from the other column if possible, otherwise delete this p tag and the h4 above it</p>
						<p>Thank you for shopping with us. Orders made before 5pm EST will be shipped out same day. Shipping will be calculated on the following page. Gift wrap options are available for most items for an additional fee. Multiple orders made on the same day to the same address will be shipped together by default. Please contact the seller for separate shipments. </p>
						<input type='text' value='Enter Coupon Code' />
					</div>
					<button>CHECKOUT</button>
					<p>IMPULSE is not responsible for fraudulent listings. If you receive an item that does not match its listing, please contact the seller or appropriate authorities. IMPULSE is not responsible for items lost in the mail. We encourage sellers to offer package tracking and encourage buyers to make sure this is included.</p>
				</div>
				
			</div>
			
		</div>
	);
}

export default Cart
