import React from 'react';
import { Link } from "react-router-dom";
import "../../style/error.scss";

const NotFound = () => {
  return (
    <div className="error__container">
			<h1 className="error__container__number">404</h1>
			<p className="error__container__text">Oups! La page que <br className="mobile-br" /> vous demandez n'existe pas.</p>
			<Link to="/" className="error__container__home">
				Retourner sur la page d’accueil
			</Link>
		</div>
  );
};

export default NotFound;
