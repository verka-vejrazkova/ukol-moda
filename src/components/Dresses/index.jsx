import React from 'react';
import './style.css';


const Dresses = ({name, description, price}) => {
    
        return (
            <div class="product">
            <img class="product__image" src="assets/${image}" alt="{image}"/>
            <div class="product__content">
                <h3 class="product__name">{name}</h3>
                <Product name='1' description='1' price='1' />
                <Product name='2' description='2' price='2' />
                <Product name='3' description='3' price='3' />
            </div>
        </div>
        
          );

}

export default Dresses;