import React from 'react';
import './style.css';


const Footer = () => {

    
    const year = "2022";
    const author = "Czechitas";

    return (
        <>
        <footer className="footer">
    <p className="footer__copyright">&copy; 2022, Czechitas</p>
    <p className="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
        </footer>
    </>
    )}

export default Footer;