import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Product from './components/Product';
import Footer from './components/Footer';
import Accessories from '/components/Accessories';
import { name } from 'file-loader';


function App(props) {
    return (
  <>
  <div className="container">
  <Header title="Móda"/> 
  <Dresses/>
  <Shoes/>
  <Product name description price />
  <Footer year={2022} author="Czechitas"/>
  <Accessories  
        name='Modrá kabelka' description='Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.' price='3590 Kč'
        />

  </div>
  </>

  
      
  );
}
render(<App />, document.querySelector('#app'));
