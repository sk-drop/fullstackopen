import React, { useState, useEffect } from 'react'
import AddContact from './components/AddContact'
import Filter from './components/Filter'
import Person from './components/Person'
import contactService from './services/contacts'
import Notification from './components/Error'


// this app is a simple phonebook with adding and filtering functionality 
const App = () => {

  const [persons, setPersons] = useState([])
  // setting initial states  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [group, setNewGroup] = useState([])
  const [message, setMessage] = useState(null)


  useEffect(() => {
    contactService.getAll().then(initialContacts => {
      setPersons(initialContacts)
      setNewGroup(initialContacts)
    })
  },[])

  // for updating array of saved names 
  let names = []
  const updateNames = () => {
    for(var i=0;i<persons.length;i++){
      names[i] = persons[i].name
    }
  }

  // for prevention of adding same contacts
  const preventDouble = (personObj) => {
    updateNames();
    if (names.find(element => element.toUpperCase() === personObj.name.toUpperCase())) {  
        if (window.confirm(`${personObj.name} is already added, replace?`)){
          return [(contactService.update(personObj, names.indexOf(`${personObj.name}`)+1)
                  .then(returnedC => {
                  setNewGroup(group.map(contact => 
                  contact.name !== personObj.name ? 
                  contact : returnedC))})), true,
                  setMessage(`${personObj.name} was changed`),
                  setTimeout(()=>{
                    setMessage(null)
                  }, 5000)]
                  } else return [true,true];
        } else if (newName === '') {
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
    var b = setNewNumber('');

    const personObj = {
      name: newName, number: newNumber
    }

    if (preventDouble(personObj)[1]){
        return a && b;
    } else {
        contactService.create(personObj).then(returnedContact => {
          setPersons(persons.concat(returnedContact))
          setNewGroup(group.concat(returnedContact))
        })
        setMessage(`${personObj.name} was added`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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

  const handleDelete = (person) => {
    if (window.confirm(`Do you really want to delete ${person.name}?`)){
      contactService.del(person.id);
      setMessage(`${person.name} was deleted`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setNewGroup(group.filter(per => per.id !== person.id))
    } else return
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter filter={filter} new={newFilter} handler={handleFilterChange}/>
      <AddContact add={addcontact} newName={newName} newNumber={newNumber} 
      nameHandler={handleNameChange} numberHandler={handleNumberChange}/>
      <br/>
      {group.map((person) => <Person person={person} key={person.id}
                              handler={() => handleDelete(person)}/>)}
    </div>
  )
}

export default App
