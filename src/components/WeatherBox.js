import React from "react";

function WeatherBox(props) {
    return (
        <div className="weather-box">
            <div className="temperature">{ Math.round(props.weather.main.temp) } °C</div>
            <div className="weather">{ props.weather.weather[0].description }</div>
        </div>
    )
}

export default WeatherBox;