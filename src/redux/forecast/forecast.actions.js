import ForecastActionTypes from './forecast.types';

import { API_KEY } from '../utils';

export const fetchFiveDaysStart = () => ({
    type: ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_START
});

export const fetchFiveDaysSuccess = cityId => ({
    type: ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_SUCCESS,
    payload: cityId
});

export const fetchFiveDaysFailure = errorMessage => ({
    type: ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_FAILURE,
    payload: errorMessage
});

export const fetchFiveDaysStartAsync = cityId => {
    return async dispatch => {
        try {
            dispatch(fetchFiveDaysStart());
            const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${API_KEY}`);
            const data = await response.json();
            dispatch(fetchFiveDaysSuccess(data));
        } catch (error) { 
            dispatch(fetchFiveDaysFailure(error.message));
        }
    }
};