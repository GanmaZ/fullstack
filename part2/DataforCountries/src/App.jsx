import { useState, useEffect } from 'react'
import Find from './components/Find'
import Countries from './services/Countries'
import CountriesBody from './components/CountriesBody'


function App() {

  const [countries, setCountries] = useState(null)
  const [countriesFind, setCountriesFind] = useState("")
  const [newFinder,setNewFinder] = useState(null)
  

  useEffect(() => {
      Countries
      .getCountries()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  
  const handleFinderChange = (event) => {
    setCountriesFind(countries.map(country => country).filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }


  return (
    <>
       <p>find countries <Find finderChangeHandler={handleFinderChange}/></p>
       <CountriesBody  countriesFind={countriesFind}/> 
    </>
  )
}

export default App
