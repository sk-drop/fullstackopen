import React from 'react'
import Person from './Person'
import Button from './DeleteB'

function Numbers(props) {
return(
        <div>
            <h2>Numbers</h2>
                <ul>
                    {props.group.map((person) => <Person person={person} key={person.id} handler={props.handler}/>)}
                </ul>
        </div>
    )
}

export default Numbers