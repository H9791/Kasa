import React from 'react';
import './Header.css';
import kasa from './Kasa.png';


export default function Header() {
    return (
        <>
            <header id="header">
                <h1 id="heading" aria-label="Heading Kasa">
                    <img src={kasa} alt="Kasa logo" />
                </h1>
                <nav>
                    <a href="#">Accueil</a>
                    <a href="#">A Propos</a>
                </nav>
            </header>
        </>
    );
}