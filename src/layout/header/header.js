import React from "react";
import "./header.css";
import logoHeader from "../../img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/Home" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/About" className="lien-site lien-menu">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;