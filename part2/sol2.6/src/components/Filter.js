import React from 'react'
import Person from './Person';

const Filter = ({filter}) => {
    if (filtered === []) {persons.map((person) => <Person person={person} key={person.number}/>)}
    else {filtered.map((person) => <Person person={person} key={person.number}/>)}
}

export default Filter