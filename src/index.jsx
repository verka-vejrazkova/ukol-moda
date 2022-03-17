import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Footer from './components/Footer';


function App(props) {
    return (
  <>
  <div className="container"></div>
  <Header>{props.title}</Header>
  <Dresses></Dresses>
  <Shoes></Shoes>
  <Footer>{props.year}{props.author}</Footer>


  </>

  
      
  );
}
render(<App />, document.querySelector('#app'));
