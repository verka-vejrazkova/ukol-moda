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
  <header>{props.title}</header>
  <section className="dresses"></section>
  <section className="shoes"></section>
  <section className="acessories"></section>
  <footer></footer>


  </>

  
      
  );
}
render(<App />, document.querySelector('#app'));
