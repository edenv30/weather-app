import CityActionTypes from './city.types.js';

const API_KEY = 'hPv0X7xUCveAHe9KDSuSATzh9weAOkVK';

export const searchCity = city => ({
    type: CityActionTypes.SEARCH_CITY,
    payload: city
});

export const fetchCitiesStart = () => ({
    type: CityActionTypes.FETCH_CITIES_START
});

export const fetchCitiesSuccess = city => ({
    type: CityActionTypes.FETCH_CITIES_SUCCESS,
    payload: city
});

export const fetchCitiesFailure = errorMessage => ({
    type: CityActionTypes.FETCH_CITIES_FAILURE,
    payload: errorMessage
});

export const fetchCitiesStartAsync = city => {
    return async dispatch => {
        try {
            dispatch(fetchCitiesStart());
            let arr = [];
            const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
            const data = await response.json();
            arr = await data.map((city, i) => arr[city.Key]={id: city.Key, name:city.LocalizedName});
            dispatch(fetchCitiesSuccess(arr));
        } catch (error) { 
            dispatch(fetchCitiesFailure(error.message));
        }
    }
}