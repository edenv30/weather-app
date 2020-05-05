import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <p className='text-container'>Weather</p>
        <div className='options'>
            <Link className='option' to='/weather-app'>Home</Link>
            <Link className='option' to='/weather-app/favorites'>Favorites</Link>
        </div>
    </div>    

);

export default Header;