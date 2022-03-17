import React from 'react';
import './style.css';


const Header = () => {

    const title = "Móda";

    return (
        <>
        <header className="header">
        <h1 className="header__title">Móda</h1>
        <p className="header__description">Stylové oblečení a doplňky pro každý den</p>
        </header>
        </>
    );

}

export default Header;