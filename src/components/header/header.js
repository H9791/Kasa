import React from 'react';
import './Header.css';
import kasa from './Kasa.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 id="heading" aria-label="Heading Kasa">
                    <img src={kasa} alt="Kasa logo" />
                </h1>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A Propos</Link>
                </nav>
            </header>
        </>
    );
}