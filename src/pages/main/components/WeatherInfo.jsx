import axios from 'axios';

import classes from '../css/WeatherInfo.module.css';

import temppic from '../../img/온도계.png'
import hum from '../../img/습도.png';
import wind from '../../img/바람.png';
import rain from '../../img/강수량.png';
import { useEffect, useState } from 'react';


function WeatherInfo() {
    const API_KEY = API_KEY;
    const [temp, setTemp] = useState();
    const [windspeed, setWindSpeed] = useState();
    const [humidity, setHumditiy] = useState();
    const [temp2, setTemp2] = useState();

    function getMyPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    }
    async function getWeatherInfo() {
        try {
            let position = await getMyPosition();
            console.log(position);
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`);
            console.log(response);
            setTemp(response.data.main.temp - 273.15);
            setHumditiy(response.data.main.humidity);
            setWindSpeed(response.data.wind.speed);
            setTemp2(response.data.main.feels_like - 273.15);
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        getWeatherInfo();
    }, []);


    return (
        <div className={classes.container}>
            <h1 className={classes.toptitle}>날씨</h1>
            <h1 className={classes.temp}><img src={temppic} />{parseFloat(temp).toFixed(1)}</h1>
            <div className={classes.threeinfo}>
                <div className={classes.specinfo}>
                    <div className={classes.specinfocon}>
                        <p className={classes.spectitle}>
                            <img src={hum} />
                            습도
                        </p>
                    </div>
                    <p>{humidity}</p>
                </div>
                <div className={classes.specinfo}>
                    <p className={classes.spectitle}>
                        <img src={wind} />
                        풍속
                    </p>
                    <p>{windspeed}</p>
                </div>
                <div className={classes.specinfo}>
                    <p className={classes.spectitle}>
                        <img src={rain} />
                        체감온도
                    </p>
                    <p>{parseFloat(temp2).toFixed(1)}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfo;
