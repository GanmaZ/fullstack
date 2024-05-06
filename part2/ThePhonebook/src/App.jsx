import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Personform from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/Contact'



const App = () => {

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  })


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState([])

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
          setNewName('')
          setNewNumber('')
        })
      }
    }else{
      personsService
        .create(personObject)
        .then(returnedPerson => { 
        setPersons(persons.concat(returnedPerson))
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
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterChangeHandler={handleFilterChange}/>
      <h2>add a new</h2>
      <Personform addPerson={addPerson} nameChangeHandler={handleNameChange} numberChangeHandler={handleNumberChange} newName={newName}  newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons showFilter={showFilter} persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App