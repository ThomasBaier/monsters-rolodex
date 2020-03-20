import React from 'react';
import {Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = (props) => ( //props giving the state from outside
<div className='card-list'>
      {props.monsters.map(monster => (
      <Card key= {monster.id} monster= {monster}/> // JS props ohne {} js-obj mit {}
          ))}
</div>
);