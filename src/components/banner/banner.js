import React from "react";
import "./banner.scss";

function Banner({ title, picture}) {
    return (
        <div id="banner">
                <img src={picture} alt="bannière"/>
                <h1>{title}</h1>
        </div>
    );
}

export default Banner;