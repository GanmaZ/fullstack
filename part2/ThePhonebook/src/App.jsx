import { useState, useEffect } from 'react'
import BetterError from './components/BetterError'
import Filter from './components/Filter'
import Personform from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/Contact'



const App = () => {

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  


  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
    name: newName,
    number: newNumber,
    }
    if(persons.map(person => person.name).includes(newName)){  
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personsService
          .update(persons.filter(person => person.name === newName).map(person => person.id), personObject)
          .then(returnedPerson => { 
          setPersons(persons.concat(returnedPerson))
          setSuccessMessage( `${returnedPerson.name} updated number to ${returnedPerson.number}`) 
          setTimeout(() => setSuccessMessage(null), 5000)
          setNewName('')
          setNewNumber('')
        })
          .catch(error =>{
            setErrorMessage( `Information of ${newName} was already deleted from server`)
            setTimeout(() => setErrorMessage(null), 5000)
          })
      }
    }else{
      personsService
        .create(personObject)
        .then(returnedPerson => { 
        setPersons(persons.concat(returnedPerson))
        setSuccessMessage( `Added ${returnedPerson.name}`) 
        setTimeout(() => setSuccessMessage(null), 5000)
        setNewName('')
        setNewNumber('')
      })
    }
    
  }
  const handleNameChange = (event) => {
    if(persons.map(person => person.name).includes(event.target.value)){ 
      window.confirm(`${event.target.value} is already added to phonebook`)
      setNewName(event.target.value) 
    }else{
      setNewName(event.target.value)
    }
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setShowFilter(persons.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)){
      personsService.erased(person.id)
      setPersons(persons.filter(x => x.id !== person.id))
      if(showFilter.length !==0){
        setShowFilter(showFilter.filter(x => x.id !== person.id))
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <BetterError error={errorMessage} success={successMessage}/>
      <Filter filterChangeHandler={handleFilterChange}/>
      <h2>add a new</h2>
      <Personform addPerson={addPerson} nameChangeHandler={handleNameChange} numberChangeHandler={handleNumberChange} newName={newName}  newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons showFilter={showFilter} persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App