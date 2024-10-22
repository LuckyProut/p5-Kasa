import React from "react";
import { Link } from "react-router-dom";
import "../../style/error.scss";

export default function ErrorPage() {
	return (
		<div className="error__container">
			<p className="error__number">404</p>
			<p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/Home" className="error__home">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
