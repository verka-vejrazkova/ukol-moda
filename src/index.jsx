import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Product from './components/Product';
import Footer from './components/Footer';


function App(props) {
    return (
  <>
  <div className="container">
  <Header title=“Móda” /> 
  <Dresses></Dresses>
  <Shoes></Shoes>
  <Product>{props.image}{props.name}{props.description}{props.price}</Product>
  <Footer>{props.year}{props.author}</Footer>

  </div>
  </>

  
      
  );
}
render(<App />, document.querySelector('#app'));
