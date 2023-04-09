import React from 'react';
import './footer.css';
import kasablack from './kasablack.jpg';

export default function Footer(){
    return (
        <>
            <div id="footer">
                <img src={kasablack} alt="Logo Kasa"/>
                <p>&#169; 2023 Kasa. All rights reserved.</p>
            </div>
        </>
    )
}