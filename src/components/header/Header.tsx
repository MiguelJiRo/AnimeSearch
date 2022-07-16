import React from "react";
const image = require("../../../assets/logo.png");

export const Header = (props: {
    title: string;
}) => {
    return (
        <header className="header-container">
            <img className="main-logo" src={image}></img>
            <h1 className="main-title">{props.title}</h1>
        </header>
    )
};