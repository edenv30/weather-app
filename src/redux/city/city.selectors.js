import { createSelector } from 'reselect';

const selectCities = state => state.city; // get the all state and return a slice of that.

export const selectAutocompleteCities = createSelector(
    [selectCities],
    city => city.autocompleteCities
);

// export const selectUpdateAutocompleteCities = createSelector(
//     [selectAutocompleteCities],

// )