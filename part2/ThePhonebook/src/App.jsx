import { useState } from 'react'
import Phone from './components/Phone'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange={handleNameChange}          
          />
        </div>
        <div>
          number: 
            <input 
              value={newNumber} 
              onChange={handleNumberChange}          
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Phone key={person.name} phone={person}/>)}
    </div>
  )
}

export default App