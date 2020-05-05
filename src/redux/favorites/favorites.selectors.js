import { createSelector } from 'reselect';

const selectFavorites = state => state.favorites; // get the all state and return a slice of that.

export const selectFavoritesHidden = createSelector(
    [selectFavorites],
    favorites => favorites.hidden
);

export const selectFavoritesList = createSelector(
    [selectFavorites],
    favorites => favorites.favoritesList
);

export const selectIsExist = createSelector(
    [selectFavorites],
    favorites => favorites.isExist
)
