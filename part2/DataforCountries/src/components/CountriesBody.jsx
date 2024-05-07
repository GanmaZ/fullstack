const CountriesBody = ({countriesFind, onClickShow, newShow}) => {
    if(newShow.length === 0){
        if(countriesFind.length > 10 && countriesFind.length < 249){
            return <p>Too many matches, specify another filter</p>
        }
        else if (countriesFind.length < 11 && countriesFind.length > 1){
            return(
                <>
                {countriesFind.map(country => <p key={country.name.common}>{country.name.common} <button onClick={onClickShow} value={country.name.common}>show</button></p>)}
                </>
            )
        }
        else if (countriesFind.length === 1){
            return(
                <>
                <h1>{countriesFind.map(country => country.name.common)}</h1>
                <p>capital {countriesFind.map(country => country.capital)}</p>
                <p>area {countriesFind.map(country => country.area)}</p>
                <h3>languages:</h3>
                <ul>
                    {countriesFind.map(country => Object.values(country.languages).map(language => <li key={language}>{language}</li>))}
                </ul>
                <img src={countriesFind.map(country => country.flags.png)} alt={countriesFind.map(country => country.flags.alt)}/>
                </>
            )
        }
    }
    else{
        return null
    }
    
}

export default CountriesBody