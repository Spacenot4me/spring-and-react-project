import React from "react";


export default function Header(){
    return(
        <header className="header">
            <img src={require('./img/logo.png')} className="header--logo" />
            <h1>Animal shelter</h1>
        </header>
    )
}