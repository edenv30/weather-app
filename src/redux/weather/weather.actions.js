import WeatherActionTypes from './weather.types';

import { API_KEY } from '../utils';

export const fetchCurrentWeatherStart = () => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_START
});

export const fetchCurrentWeatherSuccess = cityId => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
    payload: cityId
});

export const fetchCurrentWeatherFailure = errorMessage => ({
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE,
    payload: errorMessage
});

export const fetchCurrentWeatherStartAsync = cityId => {
    return async dispatch => {
        try {
            dispatch(fetchCurrentWeatherStart());
            let arr = [];
            const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}.json?apikey=${API_KEY}`);
            const data = await response.json();
            let degree = await data[0].Temperature.Metric.Value;
            let weatherText = await data[0].WeatherText;
            arr[0]= await {id: cityId, temp: degree, weatherText: weatherText};
            dispatch(fetchCurrentWeatherSuccess(arr));
        } catch (error) { 
            dispatch(fetchCurrentWeatherFailure(error.message));
        }
    }
}