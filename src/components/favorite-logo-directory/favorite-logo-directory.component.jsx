import React from 'react';

import { ReactComponent as EmptyLogo } from '../../assests/favorite.svg';
// import { ReactComponent as FullLogo } from '../../assests/star.svg';

import './favorite-logo-directory.styles.scss';

const FavoriteLogoDirectory = () => (
    <div className='logo-container1'>
        <span>
            <EmptyLogo className='logo1'/>
        </span>
        <div className='text-logo1'>
            <p>Add to favorite</p>
        </div>
    </div>
);

export default FavoriteLogoDirectory;