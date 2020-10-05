import React, { useState } from 'react'
import AddContact from './components/AddContact'
import Filter from './components/Filter'
import Numbers from './components/Numbers'


// this app is a simple phonebook with adding and filtering functionality 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0176-8880999'},
    { name: 'Diego Hargreeves', number: '0172-10293829'},
    { name: 'Luther Hargreeves', number: '0178-02981722'}
  ])
  // setting first states  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newGroup, setNewGroup] = useState(persons)

  // for updating array of saved names 
  let names = []
  const updateNames = () => {
    for(var i=0;i<persons.length;i++){
      names[i] = persons[i].name
    }
  }

  // for prevention of adding same contacts
  const preventDouble = (newName) => {
    updateNames();
    if (names.find(element => element.toUpperCase() === newName.toUpperCase())) {
        return (
            [window.alert(`${newName} is already added!`), true]
        )} else if (newName === '') {
            return([true, true])
        } else return false
  }

  // for filtering the persons array
  const filter = (event) => {
    event.preventDefault()
    updateNames()
    let t = []
    t = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))
    console.log(t)
    if (t.length === 0){
      window.alert(`${newFilter} can't be found!`)
      setNewGroup(persons);
      setNewFilter('');
    } else {
      setNewGroup(t);
      setNewFilter('');
    }
  }

  // for adding new contacts
  const addcontact = (event) => {
    event.preventDefault()

    var a = setNewName('');
    var b = setNewNumber('')
    var c = setNewGroup(persons)

    const personObject = {
      name: newName, number: newNumber
    }

    if (preventDouble(newName)[1]){
        return a && b;
    } else {
        setPersons(persons.concat(personObject))
        setNewGroup(persons.concat(personObject))
        updateNames()
        return a && b;
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} new={newFilter} handler={handleFilterChange}/>
      <AddContact add={addcontact} newName={newName} newNumber={newNumber} 
      nameHandler={handleNameChange} numberHandler={handleNumberChange}/>
      <Numbers newGroup={newGroup}/>
    </div>
  )
}

export default App
