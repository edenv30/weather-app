import { combineReducers } from 'redux';

import cityReducer from './city/city.reducer';
import weatherReducer from './weather/weather.reducer';
import forecastReducer from './forecast/forecast.reducer';

export default combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    forecast: forecastReducer
});