import React from 'react';
import './style.css';


const Product = () => {
  
    const image = "";
    const name = "";
    const description = "";
    const price = "";
  
  return (
        <>
<section class="dresses">
    <h2>Šaty</h2>
    <div class="products">

        <div class="product">
            <img class="product__image" src="assets/red-dress.jpg" alt="Červené šaty"/>
            <div class="product__content">
                <h3 class="product__name">Červené šaty</h3>
                <p class="product__description">V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.</p>
                <p class="product__price">2290 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/flower-dress.jpg" alt="Květované šaty"/>
            <div class="product__content">
                <h3 class="product__name">Květované šaty</h3>
                <p class="product__description">Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.</p>
                <p class="product__price">3100 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/yellow-dress.jpg" alt="Žluté šaty"/>
            <div class="product__content">
                <h3 class="product__name">Žluté šaty</h3>
                <p class="product__description">Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě. </p>
                <p class="product__price">4250 Kč</p>
            </div>
        </div>

    </div>
</section>



<section class="shoes">
    <h2>Boty</h2>
    <div class="products">

        <div class="product">
            <img class="product__image" src="assets/running-shoes.jpg" alt="Běhací tenisky"/>
            <div class="product__content">
                <h3 class="product__name">Běhací tenisky</h3>
                <p class="product__description">Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.</p>
                <p class="product__price">1790 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/shiny-shoes.jpg" alt="Třpytivé lodičky"/>
            <div class="product__content">
                <h3 class="product__name">Třpytivé lodičky</h3>
                <p class="product__description">Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.</p>
                <p class="product__price">2950 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/red-shoes.jpg" alt="Červené botičky"/>
            <div class="product__content">
                <h3 class="product__name">Červené botičky</h3>
                <p class="product__description">Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.</p>
                <p class="product__price">6200 Kč</p>
            </div>
        </div>

    </div>
</section>



<section class="accessories">
    <h2>Doplňky</h2>
    <div class="products">

        <div class="product">
            <img class="product__image" src="assets/blue-handbag.jpg" alt="Modrá kabelka"/>
            <div class="product__content">
                <h3 class="product__name">Modrá kabelka</h3>
                <p class="product__description">Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.</p>
                <p class="product__price">3590 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/grey-scarf.jpg" alt="Šedá vlněná šála"/>
            <div class="product__content">
                <h3 class="product__name">Šedá vlněná šála</h3>
                <p class="product__description">Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.</p>
                <p class="product__price">970 Kč</p>
            </div>
        </div>

        <div class="product">
            <img class="product__image" src="assets/glasses.jpg" alt="Brýle"/>
            <div class="product__content">
                <h3 class="product__name">Brýle</h3>
                <p class="product__description">Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.</p>
                <p class="product__price">1620 Kč</p>
            </div>
        </div>

    </div>
</section>

        
        </>

  );
  
    }

export default Product;