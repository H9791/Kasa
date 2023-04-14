import React from 'react';
import './thumb.css';
import { Link } from 'react-router-dom';

export default function Thumb( {logement, key} ) {


    return (
        <>
            <Link to="/logement" state={logement}>
                <article className="thumb">
                    <p>{logement.title}</p>
                    <img src={logement.cover} alt="Thumbnail" />
                </article>
            </Link>
        </>
    )
}
