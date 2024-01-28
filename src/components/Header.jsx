import React from "react";
import './css/header.css'
import logo from '../img/logo.png'

const Header = () => {
    return(
        <div className="Header">
            <nav>
                <img src={logo} alt="" className="logo-header" />
                <ul style={{color:"black"}}>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contactame</a></li>
                </ul>

            </nav>

        </div>

    )
}
export default Header