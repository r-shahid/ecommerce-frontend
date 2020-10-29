import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import HeroImage from '../HeroImage/HeroImage';

const Products = (props) => {
	console.log('Products props- ', props);
	const { products } = props;
	const loaded = () => (
		<>
			<HeroImage />
			<div className='all-products'>
				{products.map((ele, ind) => (
					<div>
						<Link key={ind} to={`/products/${products[ind]._id}`}>
							<img src={products[ind].img} alt={products[ind].product} />
							<p>{products[ind].product}</p>
						</Link>
					</div>
				))}
			</div>
		</>
	);
	return products.length > 0 ? loaded() : <h1>Products loading</h1>;
};
export default Products;
