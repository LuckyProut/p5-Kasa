import React from "react";
import "../../style/header.scss";
import logoHeader from "../../img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header id="header" className="header-container">
            <NavLink to="/"><img src={logoHeader} alt="Logo"/></NavLink>
            <nav>
                <NavLink to="/" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/About" className="lien-site lien-menu">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;