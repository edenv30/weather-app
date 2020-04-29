import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import { selectCity } from '../../redux/city/city.selectors';
import { selectDegereeOfIdCity } from '../../redux/weather/weather.selectors';

import { fetchCurrentWeatherStartAsync } from '../../redux/weather/weather.actions';

import './logo-directory.styles.scss';

import { ReactComponent as Logo } from '../../assests/meteorology.svg';
// console.log('temp', temp.currentWeather.temp )

const LogoDirectory = ({ city, degree, fetchCurrentWeatherStartAsync }) => { 
    
    fetchCurrentWeatherStartAsync(city.id);
    return (
    <div className='logo-container'>
        <Logo className='logo'/>
        <div>
            <p>{city.name}</p>
            <p>{degree}°C</p>
        </div>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    city: selectCity,
    degree: selectDegereeOfIdCity
});

const mapDispatchToProps = dispatch => ({
    fetchCurrentWeatherStartAsync: cityId => dispatch(fetchCurrentWeatherStartAsync(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoDirectory);