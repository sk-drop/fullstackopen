import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0176-8880999'}
  ]) 
  const [newName, setNewName] = useState('add name')
  const [newNumber, setNewNumber] = useState('add number')

  let names = []
  var i = 0

  const preventDouble = (newName) => {
    
    for(i=0;i<persons.length;i++){
        names[i] = persons[i].name
    }

    if (names.find(element => element.toUpperCase() === newName.toUpperCase())) {
        return (
            [window.alert(`${newName} is already added!`), true]
        )} else {return false}
  }

  const addcontact = (event) => {
    event.preventDefault()

    var a = setNewName('add name...');
    var b = setNewNumber('add number...')

    const personObject = {
      name: newName, number: newNumber
    }

    if (preventDouble(newName)[1]) {
      return a && b;
    }

    setPersons(persons.concat(personObject))
    return a && b;
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addcontact}>
        <div>
          <p> name: <input value={newName} onChange={handleNameChange}/> </p>
          <p> number: <input value={newNumber} onChange={handleNumberChange}/> </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <Person person={person} key={person.number}/>)}
      </ul>
    </div>
  )
}

export default App
