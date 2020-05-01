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
            // let arr = [];
            const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}.json?apikey=${API_KEY}`);
            const data = await response.json();
            let degree = await data[0].Temperature.Metric.Value;
            // let weatherText = await data[0].WeatherText;
            // arr[0]= await {id: cityId, temp: degree, weatherText: weatherText};
            dispatch(fetchCurrentWeatherSuccess(degree));
        } catch (error) { 
            dispatch(fetchCurrentWeatherFailure(error.message));
        }
    }
};

// export const fetchFiveDaysStart = () => ({
//     type: WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_START
// });

// export const fetchFiveDaysSuccess = cityId => ({
//     type: WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_SUCCESS,
//     payload: cityId
// });

// export const fetchFiveDaysFailure = errorMessage => ({
//     type: WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_FAILURE,
//     payload: errorMessage
// });

// export const fetchFiveDaysStartAsync = cityId => {
//     return async dispatch => {
//         try {
//             dispatch(fetchFiveDaysStart());
//             const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${API_KEY}`);
//             const data = await response.json();
//             dispatch(fetchFiveDaysSuccess(data));
//         } catch (error) { 
//             dispatch(fetchFiveDaysFailure(error.message));
//         }
//     }
// };
