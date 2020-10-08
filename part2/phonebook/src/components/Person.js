import React from 'react'
import Button from '../components/DeleteB'

const Person = ({person, handler}) => {
   return (
    <li key={person.id}>
        {person.name}: {person.number} <br/>
        <Button handler={handler}/>
    </li> 
)}
export default Person