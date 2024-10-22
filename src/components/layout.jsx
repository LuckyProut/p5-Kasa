import React from "react";
import "../style/layout.css";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;