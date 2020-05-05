export const isExistingCityInFavorites = (favoritesList, cityForCheck) => {
    const existingCityInList = favoritesList.findIndex(
        city => city.id === cityForCheck.id);
    if(existingCityInList === -1) { // city not exist in favorites list
        return false;
    }
    return true;
}