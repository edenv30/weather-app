import React from 'react';

import LogoDirectory from '../logo-directory/logo-directory.component';
import FavoriteLogoDirectory from '../favorite-logo-directory/favorite-logo-directory.component';

import './directory.styles.scss';

import CardDaysContainer from '../card-days-container/card-days-container.component';
//        <LogoDirectory />

const Directory = () => (
    <div className='directory'>
        <FavoriteLogoDirectory />
        <LogoDirectory />
        <CardDaysContainer />
    </div>
);

export default Directory;