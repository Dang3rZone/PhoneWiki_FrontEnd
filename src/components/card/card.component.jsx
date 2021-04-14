import React from 'react';

import './card.styles.scss';

export const Card = (props) => (
  <div className="card-container">
    <img alt="phone" src={props.phone.image} />
    <h2> {props.phone.name} </h2>
    <p> {props.phone.price}$ </p>
  </div>
);
