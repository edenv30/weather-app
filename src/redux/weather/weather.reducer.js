import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
    id: '215854', // default of Tel Aviv
    // currentWeather: '',
    degree: '',
    // weatherText: '',
    fiveDays: '',
    isFetching: false,
    errorMessage: undefined
}

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case WeatherActionTypes.CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            };
        case WeatherActionTypes.FETCH_CURRENT_WEATHER_START:
            return {
                ...state,
                isFetching: true
            };
        case WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                degree: action.payload
            };
        case WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_START:
            return{
                ...state,
                isFetching: true
            };
        case WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fiveDays: action.payload
            };
        case WeatherActionTypes.FETCH_FIVE_DAYS_FORECAT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default weatherReducer;