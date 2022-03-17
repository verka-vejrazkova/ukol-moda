import React from 'react';
import './style.css';


const Dresses = () => {
    return (
    <>
    <section class="dresses">
			<h2>Šaty</h2>
			<div class="products">

				<div class="product">
					<img class="product__image" src="assets/red-dress.jpg" alt="Červené šaty">
					<div class="product__content">
						<h3 class="product__name">Červené šaty</h3>
						<p class="product__description">V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.</p>
						<p class="product__price">2290 Kč</p>
					</div>
				</div>

				<div class="product">
					<img class="product__image" src="assets/flower-dress.jpg" alt="Květované šaty">
					<div class="product__content">
						<h3 class="product__name">Květované šaty</h3>
						<p class="product__description">Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.</p>
						<p class="product__price">3100 Kč</p>
					</div>
				</div>

				<div class="product">
					<img class="product__image" src="assets/yellow-dress.jpg" alt="Žluté šaty">
					<div class="product__content">
						<h3 class="product__name">Žluté šaty</h3>
						<p class="product__description">Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě. </p>
						<p class="product__price">4250 Kč</p>
					</div>
				</div>

			</div>
		</section>

    </>
    );
}

export default Dresses;