import React from 'react';

import LogoDirectory from '../logo-directory/logo-directory.component';
import FavoriteLogoDirectory from '../favorite-logo-directory/favorite-logo-directory.component';

import './directory.styles.scss';

import CardDaysContainer from '../card-days-container/card-days-container.component';

const Directory = () => (
    <div className='directory'>
        <LogoDirectory />
        <FavoriteLogoDirectory />
        <h1>Scattered clouds</h1>
        <CardDaysContainer />
    </div>
);

export default Directory;