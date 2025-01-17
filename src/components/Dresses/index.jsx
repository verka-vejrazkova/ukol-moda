import React from 'react';
import './style.css';
import Product from '../Product';

import redDress from '../assets/red-dress.jpg'
import flowerDress from '../assets/flower-dress.jpg'
import yellowDress from '../assets/yellow-dress.jpg'

const Dresses = ({image, name, description, price}) => {
    
    return (

        <section className="dress">
  <h2>Šaty</h2>
  <div className="products"> 

  <Product image={redDress} name='Červené šaty' description='V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.' price='2290 Kč' />
  <Product image={flowerDress} name='Květované šaty' description='Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.' price='3100 Kč' />
  <Product image={yellowDress} name='Žluté šaty' description='Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě. ' price='4250 Kč' />
       
        </div>
        </section>
    );


}

export default Dresses;