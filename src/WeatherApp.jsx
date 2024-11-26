import './WeatherApp.css';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
            city: "Delhi",
            feelsLike: 17.45,
            humidity: 59,
            temp: 18.05,
            tempMax: 18.05,
            tempMin: 18.05,
            weather: "haze"
        });

        let updateInfo = (newInfo) => {
            setWeatherInfo(newInfo);
        }

    return(
        <div className='WeatherApp'>
            <h1>Weather App By Abhay Aggarwal</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>            
        </div>
    );
};

