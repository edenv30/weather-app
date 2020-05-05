import React from 'react';

import { convertFerToCel } from '../../redux/utils';

import './card-home.styles.scss';

const CardHome = ({ day }) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
    <div className='waether-card'>
            <div className='content'>
                <h1 className='day-title'>{days[new Date(day.Date).getDay()]}</h1>
                <h2>{convertFerToCel(day.Temperature.Maximum.Value)}°C</h2>
            </div>
        </div>
    )
}

export default CardHome;