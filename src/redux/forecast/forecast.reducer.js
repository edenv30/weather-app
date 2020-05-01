import ForecastActionTypes from './forecast.types';

const INITIAL_STATE = {
    fiveDays: '',
    isFetching: false,
    errorMessage: undefined
}

const forecastReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_START:
            return{
                ...state,
                isFetching: true
            };
        case ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fiveDays: action.payload
            };
        case ForecastActionTypes.FETCH_FIVE_DAYS_FORECAT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }

}

export default forecastReducer;