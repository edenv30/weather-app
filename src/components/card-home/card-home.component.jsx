import React from 'react';

import './card-home.styles.scss';

const CardHome = ({ day }) => (
    <div className='waether-card'>
            <div className='content'>
                <h1 className='day-title'>{day.day}</h1>
                <h2>{day.degree}</h2>
            </div>
        </div>
);

export default CardHome;