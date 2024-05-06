import { useState } from 'react'
import Personform from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setShowFilter] = useState([])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
    name: newName,
    number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    if(persons.map(x => x.name).includes(event.target.value)){ 
      alert(`${event.target.value} is already added to phonebook`)
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterChangeHandler={handleFilterChange}/>
      <h2>add a new</h2>
      <Personform addPerson={addPerson} nameChangeHandler={handleNameChange} numberChangeHandler={handleNumberChange} newName={newName}  newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons showFilter={showFilter} persons={persons}/>
    </div>
  )
}

export default App