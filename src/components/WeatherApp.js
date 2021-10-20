import React from 'react';
import '../styles/index.css'
import SearchBar from './SearchBar';
import LocationBox from './LocationBox'
import WeatherBox from './WeatherBox';

class WeatherApp extends React.Component {
    render() {
        return(
            <div className='app'>
                <main>
                    <SearchBar />
            
                    <LocationBox />
        
                    <WeatherBox />
                </main>
            </div>
        )
    }
}

export default WeatherApp;