import React from 'react';

import './logo-directory.styles.scss';

import { ReactComponent as Logo } from '../../assests/meteorology.svg';

const LogoDirectory = () => (
    <div className='logo-container'>
        <Logo className='logo'/>
        <div>
            <p>city</p>
            <p>degree</p>
        </div>
    </div>
);

export default LogoDirectory;