const CountryBody = ({newShow, newWeather}) => {

    if(newShow.length === 0){
        return null
    }
    else{   
        return(
            <>
            <h1>{newShow.name.common}</h1>
            <p>capital {newShow.capital}</p>
            <p>area {newShow.area}</p>
            <h3>languages:</h3>
            <ul>
            {Object.values(newShow.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={newShow.flags.png} alt={newShow.flags.alt}/>
            <h1>Weather in {newShow.capital}</h1>
            <p>temperature {(newWeather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${newWeather.weather[0].icon}.png`} ></img>
            <p>wind {newWeather.wind.speed} m/s</p>
            </>
        )
    }
}

export default CountryBody