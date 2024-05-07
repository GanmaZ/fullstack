const CountryBody = ({newShow}) => {

    if(newShow.length === 0){
        return null
    }
    else{
        return(
            <>
            <h1>{newShow.name.common}</h1>
            <p>capital {newShow.name.capital}</p>
            <p>area {newShow.area}</p>
            <h3>languages:</h3>
            <ul>
            {Object.values(newShow.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={newShow.flags.png} alt={newShow.flags.alt}/>
            </>
        )
    }
}

export default CountryBody