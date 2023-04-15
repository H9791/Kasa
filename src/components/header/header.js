import React from 'react';
import './header.css';
import kasa from './Kasa.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

    const path = useLocation().pathname;
    let classNameHome = path === "/" ? "home-active" : "";
    let classNameAPropos = path === "/a-propos" ? "apropos-active" : "";

    return (
        <header id="header">
            <h1 id="heading" aria-label="Heading Kasa">
                <img src={kasa} alt="Kasa logo" />
            </h1>
            <nav>

                <Link className={classNameHome} to="/">Accueil</Link>

                <Link className={classNameAPropos} to="/a-propos">A Propos</Link>
            </nav>
        </header>
    );
}