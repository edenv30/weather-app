A web app in react with redux that shows the weather of some city. The user should be able to search for a city and save it to favorites, using API for endpoints. 

You expected to see 2 pages in this app. (weather page and favorites page).

API:
The API I use for this app is AccuWeather API. 
You will use 3 endpoints: location autocomplete for the search field, get current weather and 5-day daily forecast.
NOTE: this API is limited to 50 requests per day.
Link: 
https://developer.accuweather.com/

Created a header with navigation links for main and favorites screen.

The main screen (weather details) composed of a search field to search a
location’s weather by city name. And below it, the current weather and a 5-day forecast of the searched location, and a button to add/remove from favorites.

Displayed Tel Aviv weather by default.

Favorites screen will be composed of a list of favorite locations. Each location have an ID, name and current weather. 

Searching should be done in English letters only.

State management done with Redux.


![alt text](https://github.com/edenv30/weather-app/blob/master/Capture.JPG)
