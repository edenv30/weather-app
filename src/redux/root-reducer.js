import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import cityReducer from './city/city.reducer';
import weatherReducer from './weather/weather.reducer';
import forecastReducer from './forecast/forecast.reducer';
import favoritesReducer from './favorites/favorites.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['city', 'weather', 'forecast', 'favorites']
}

const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    forecast: forecastReducer,
    favorites: favoritesReducer
});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//     city: cityReducer,
//     weather: weatherReducer,
//     forecast: forecastReducer,
//     favorites: favoritesReducer
// });