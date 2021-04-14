import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.scss';

export const CardList = (props) => (
  <div className="card-list">
    {props.phones.map((phone) => (
      <Card key={phone.id} phone={phone} />
    ))}
  </div>
);
