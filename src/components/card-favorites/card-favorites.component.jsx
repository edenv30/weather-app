import React from 'react';
import { connect } from 'react-redux';

import {removeFromFavorites } from '../../redux/favorites/favorites.actions';

import './card-favorites.styles.scss';

const CardFavorites = ({ city, removeFromFavorites }) => {

    return (
    <div className='favo-card'>
            <div className='content'>
                <h1 className='city-title'>{city.name}</h1>
                <h2 className='degree-title'>{city.degree}°C</h2>
                <h2 className='text-degree-title'>{city.textDegree}</h2>
                <span className='remove-city-button' onClick={() => removeFromFavorites(city)}>&#10005;</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeFromFavorites: city => dispatch(removeFromFavorites(city)),
});

export default connect(null, mapDispatchToProps)(CardFavorites);