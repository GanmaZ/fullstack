import { useState, useEffect } from 'react'
import Find from './components/Find'
import Countries from './services/Countries'
import Weather from './services/Weather'
import CountriesBody from './components/CountriesBody'
import CountryBody from './components/CountryBody'


function App() {

  const [countries, setCountries] = useState(null)
  const [countriesFind, setCountriesFind] = useState("")
  const [newShow, setNewShow] = useState([])
  const [newWeather, setNewWeather] = useState([])
  

  useEffect(() => {
      Countries
      .getCountries()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  
  const handleFinderChange = (event) => {
    setCountriesFind(countries.map(country => country).filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    if(newShow.length !== 0){
      setNewShow([])
    }
  }

  const onClickShow = (event) => {
    Countries
    .getCountry(event.target.value)
    .then(initialCountry => setNewShow(initialCountry))
    Weather
    .getWeather(event.target.value)
    .then(initialWeather => setNewWeather(initialWeather))
  }

  return (
    <>
      <p>find countries <Find finderChangeHandler={handleFinderChange}/></p>
      <CountriesBody  countriesFind={countriesFind} onClickShow={onClickShow} newShow={newShow}/>
      <CountryBody  newShow={newShow} newWeather={newWeather}/>
    </>
  )
}

export default App
