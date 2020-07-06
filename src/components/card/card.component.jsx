import React from 'react';

import './card.styles.css'

export const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='hero' src={props.hero.picture.large}/>
            <h2> { props.hero.name.first +' '+ props.hero.name.last }</h2>
            <p>{props.hero.email}</p>
        </div>
    );
}