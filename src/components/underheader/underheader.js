import React from 'react';
import './underheader.css';

export default function Underheader({cover}){
    let cls="";
    cover===1?cls="under-header":cls="under-header2";
    
    return (
        <>
        <div id="under-header" className={cls}>
            <p>Chez vous, <span>partout et ailleurs.</span></p>
        </div>
        </>
    );
}