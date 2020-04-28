import React from 'react';

import { days } from '../../assests/datadays';

import CardHome from '../card-home/card-home.component';

import './card-days-container.styles.scss';

const CardDaysContainer = () => (
    <div className='cards-directory'>
       {days.map(day => (
           <CardHome key={day.id} day={day} />
       ))}
    </div>
);

export default CardDaysContainer;