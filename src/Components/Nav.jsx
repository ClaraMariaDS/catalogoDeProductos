import React from 'react';
import './style/Nav.css'
import Logo from '../Images/logo.jpg'
import Instagram from '../Images/instagram.svg'
import Whatsapp from '../Images/whatsapp.svg'


function Nav () {
    return(
        <div className="Header">
            <div className="titulo">
                <img src={Logo} alt="Logo" className="Logo"/>
                <h1>Amoblamientos y Arte</h1>
            </div>
            <nav className="nav">
                <a href="https://www.instagram.com/amoblamientosyarte/"> <img src={Instagram} alt="Logo Instagram" /></a>
                <a href=" https://api.whatsapp.com/send?phone=542215682014"> <img src={Whatsapp} alt="Logo Whatsapp" /></a>
            </nav>
        </div>
    )
}
export default Nav