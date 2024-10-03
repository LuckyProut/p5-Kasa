import React from "react";
import "./header.css";
import logoHeader from "../../img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/a-propos" className="lien-site lien-menu">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;