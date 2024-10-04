import React from "react";
import "./banner.css";
import bannerImg from "../../img/bannerImg.png";

function Banner() {
    return (
        <div id="banner">
                <img src={bannerImg} alt="bannière"/>
                <p>Chez vous, partout et ailleurs</p>
        </div>
    );
}

export default Banner;