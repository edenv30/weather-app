import FavoritesActionTypes from './favorites.types';
import { isExistingCityInFavorites } from './favorites.utils';

const INITIAL_STATE = {
    isExist: 'false',
    favoritesList: []
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FavoritesActionTypes.IS_EXIST_IN_FAV_LIST:
            return {
                ...state,
                isExist: isExistingCityInFavorites(state.favoritesList, action.payload)
            }
        case FavoritesActionTypes.SHOW_FAVORITES_TO_PAGE:
            return {
                ...state
            };
        case FavoritesActionTypes.ADD_TO_FAVORITES_LIST:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload],
                isExist: true
            };
        case FavoritesActionTypes.REMOVE_FROM_FAVORITES_LIST:
            return {
                ...state,
                favoritesList: state.favoritesList.filter(city => 
                    city.id !== action.payload.id),
                isExist: false
            };
        default:
            return state;
    }
}

export default favoritesReducer;