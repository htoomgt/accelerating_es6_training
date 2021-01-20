import * as ELEMENTS from './element.js';
import {Http} from './http.js';
import {WEATHER_PROXY_HANDLER, WeatherData} from "./weather-data.js";
const OPEN_WEATHER_API_KEY = 'f49a8e593d5a2526d9e3210d58e5ac0f';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);


function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if(CITY_NAME.length == 0){
        return alert("Please a city name!");
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+CITY_NAME+"&units=metric&appid="+OPEN_WEATHER_API_KEY;
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
            ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
        })
        .catch(error => alert(error));
}

function updateWeather(weatherData){
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}