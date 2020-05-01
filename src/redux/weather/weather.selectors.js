import { createSelector } from 'reselect';

const selectIdOfCity = state => state.weather; // get the all state and return a slice of that.

export const selectDegereeOfIdCity = createSelector(
    [selectIdOfCity],
    weather => weather.degree
);

export const selectFiveDays = createSelector(
    [selectIdOfCity],
    weather => weather.fiveDays
);