import React from 'react';
import './thumb.css';

export default function Thumb({id, title, cover}){
    return (
        <>
            <article className="thumb">
                <p>{title}</p>
                <img src={cover} alt="Image thumbnail" id={id}/>
            </article>
        </>
    )
}
