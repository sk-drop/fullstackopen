import React from 'react'
import Person from './Person'

function Numbers(props) {
return(
        <div>
            <h2>Numbers</h2>
                <ul>
                    {props.newGroup.map((person) => <Person person={person} key={person.number}/>)}
                </ul>
        </div>
    )
}

export default Numbers