import React from "react";

class WeatherBox extends React.Component {
    render() {
        return (
            <div className="weather-box">
                <div className="temperature">12 °C</div>
                <div className="weather">Sunny</div>
            </div>
        )
    }
}

export default WeatherBox;