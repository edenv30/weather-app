// import CityActionTypes from './city.types.js';


const API_KEY = 'hPv0X7xUCveAHe9KDSuSATzh9weAOkVK';

export const setAutocompleteCities = async city => {
        let response, data, arr = [];
        if (city.trim().length > 0) {
          response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
          data = await response.json();
          arr = await data.map((city, i) => arr[i]={key:city.Key, name:city.LocalizedName});
          // let cities = data.map((city,i) => city.LocalizedName);
          // let res = Array.from(arr);
          console.log(arr);
          return arr;
        }
       return city;
   
};