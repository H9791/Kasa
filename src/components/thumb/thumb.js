import React from 'react';
import './thumb.css';
import { Link } from 'react-router-dom';

export default function Thumb({ logement, id }) {
   
    let linkTo = "/logement/" + id;

    return (
        <Link to={linkTo} state={logement}>
            <article className="thumb">
                <p>{logement.title}</p>
                <img src={logement.cover} alt="Thumbnail" />
            </article>
        </Link>
    )
}
