import React, { 
  // useState, 
  // useEffect
 } 
  from 'react';

//import { 
  //Switch, 
  //Route, 
  // Link, 
  // Redirect
 //} 
  //from 'react-router-dom';
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs';

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Main /> */}
      <AboutUs />
			<Footer />
		</div>
	); 
}


export default App;