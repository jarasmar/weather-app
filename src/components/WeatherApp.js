import React from 'react';
import '../styles/index.css'
import SearchBar from './SearchBar';
import LocationBox from './LocationBox'
import WeatherBox from './WeatherBox';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    render() {
        return(
            <div className='app'>
                <main>
                    <SearchBar />
            
                    <LocationBox date={ this.state.date } />
        
                    <WeatherBox />
                </main>
            </div>
        )
    }
}

export default WeatherApp;