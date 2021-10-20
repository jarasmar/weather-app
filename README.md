# React Weather App

## Setup instructions

- Download the repo
- Register in [Open Weather App]("https://openweathermap.org/api")
- Generate your own `api key`
- Put your `api key` into `src/components/WeatherApp.js`

```
const api = {
  key: "",
  base: "https://api.openweathermap.org/data/2.5/"
}
```
- Run `yarn start`
- Visit `http://localhost:3000/`