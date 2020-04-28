import { setAutocompleteCities } from './city.utils';
import CityActionTypes from './city.types.js';

const INITIAL_STATE = {
    selectedCity: '',
    autocompleteCities: [],
    isFetching: false,
    errorMessage: undefined
};

const cityReducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type) {
        case CityActionTypes.SEARCH_CITY:
            return {
                ...state,
                autocompleteCities: setAutocompleteCities(action.payload)                
            };
        case CityActionTypes.FETCH_CITIES_START:
            return {
                ...state,
                isFetching: true
            };
        case CityActionTypes.FETCH_CITIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                autocompleteCities: action.payload
                // autocompleteCities: setAutocompleteCities(action.payload)      
            };
        case CityActionTypes.FETCH_CITIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default cityReducer;