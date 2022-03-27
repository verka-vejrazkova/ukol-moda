import React from 'react';
import './style.css';
import Product from '../Product';

const Acessories = ({name, description, price}) => {
    
    return (

        <section className="dresses">
  <h2>Šaty</h2>
  <div className="products"> 

  <Product name='1' description='1' price='1' />
  <Product name='2' description='2' price='2' />
  <Product name='3' description='3' price='3' />
       
        </div>
        </section>
    );


}

export default Acessories;