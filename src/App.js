import React, { 
  // useState, 
  // useEffect
 } 
  from 'react';

import { 
  Switch, 
  Route, 
  // Link, 
  // Redirect
 } 
  from 'react-router-dom';

import './App.css';
import Home from './components/home/home';
import Cart from './components/cart/cart';


function App() {
return (
	<div className='App'>
		<div>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						path='/cart'
						render={(data) => (
							<Cart cart={cart} {...data} handleClick={removeCart} />
						)}
					/>
				</Switch>
			</main>
		</div>
	</div>
);
}


export default App;