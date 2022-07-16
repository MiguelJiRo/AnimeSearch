import React from "react";
import { Info } from '../feature/Info';

export const Footer = () => {

    return (
        <footer className="footer-container">
            <Info />
            <div className="footer-create-container">
                <span className="footer-text">Created by</span>
                <span className="footer-text">Miguel Jiménez Rodríguez</span>
            </div>
            <a href="https://github.com/MiguelJiRo" target="_blank" className="github"></a>
        </footer>
    )
};