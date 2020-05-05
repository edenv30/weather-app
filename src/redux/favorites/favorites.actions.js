import FavoritesActionTypes from './favorites.types';
 
export const toggleFavoritesHidden = city => ({
    type: FavoritesActionTypes.TOGGLE_FAVORITES_HIDDEN,
    payload: city
});

export const isExistIN = city => ({
    type: FavoritesActionTypes.IS_EXIST_IN_FAV_LIST,
    payload: city
});

export const addToFavorites = city => ({
    type: FavoritesActionTypes.ADD_TO_FAVORITES_LIST,
    payload: city
});

export const removeFromFavorites = city => ({
    type: FavoritesActionTypes.REMOVE_FROM_FAVORITES_LIST,
    payload: city
});