import React from 'react';
import '../styles/index.css'
import SearchBar from './SearchBar';
import LocationBox from './LocationBox'
import WeatherBox from './WeatherBox';

const api = {
    key: "",
    base: "https://api.openweathermap.org/data/2.5/"
}

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            input: '',
            weather: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.search = this.search.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    search(event) {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${this.state.input}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        input: '',
                        weather: result
                    })
                    console.log(result)
                });
        }
    }

    render() {
        return(
            <div className={ 
                (typeof this.state.weather.main != "undefined") 
                  ? ((this.state.weather.main.temp > 16) 
                    ? 'app warm' 
                    : 'app') 
                  : 'app' 
            }>
                <main>
                    <SearchBar 
                        onChange={ (e) => this.handleChange(e) } 
                        onKeyPress={ (e) => this.search(e) } 
                        value={ this.state.input } 
                    />

                    {(typeof this.state.weather.main != "undefined") ? (
                        <div>
                            <LocationBox 
                                date={ this.state.date } 
                                weather={ this.state.weather } 
                            />
                
                            <WeatherBox 
                                weather={ this.state.weather }
                            />
                        </div>
                    ) : ('')}
                </main>
            </div>
        )
    }
}

export default WeatherApp;