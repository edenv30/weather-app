import { createSelector } from 'reselect';

const selectForecast = state => state.forecast;

export const selectFiveDays = createSelector(
    [selectForecast],
    forecast => forecast.fiveDays
);

export const selectDailyForecastsIconPharse = createSelector(
    [selectFiveDays],
    fiveDays => fiveDays.DailyForecasts[0].Day.IconPhrase
);

export const selectDailyForecastsDegreeMaximum = createSelector(
    [selectFiveDays],
    fiveDays => fiveDays.DailyForecasts[0].Temperature.Maximum.Value
)