import { createSelector } from 'reselect';

const selectForecast = state => state.forecast;

export const selectFiveDays = createSelector(
    [selectForecast],
    forecast => forecast.fiveDays
);