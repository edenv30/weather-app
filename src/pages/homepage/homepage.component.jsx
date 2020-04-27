import React from 'react';

import Directory from '../../components/directory/directory.component';
import SearchField from '../../components/search-field/search-field.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <SearchField />
        <Directory />
    </div>
);

export default HomePage;