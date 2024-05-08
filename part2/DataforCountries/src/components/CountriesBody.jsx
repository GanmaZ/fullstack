import CountryBody from './CountryBody'

const CountriesBody = ({countriesFind, onClickShow, newShow, newWeather}) => {

    if(countriesFind.length > 10 && countriesFind.length < 249 && newShow.length === 0){
        return <p>Too many matches, specify another filter</p>
    }
    else if (countriesFind.length < 11 && countriesFind.length > 1 && newShow.length === 0){
        return(
            <>
            {countriesFind.map(country => <p key={country.name.common}>{country.name.common} <button onClick={onClickShow} value={country.name.common}>show</button></p>)}
            </>
        )
    }
    else if (countriesFind.length === 1 || newShow.length !== 0){
        return <CountryBody newShow={newShow} newWeather={newWeather}/>
    }
    
}

export default CountriesBody