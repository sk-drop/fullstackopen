import React from 'react'

function AddContact(props) {
return (<form onSubmit={props.add}>
    <div>
        <p> name: <input value={props.newName} onChange={props.nameHandler}/> </p>
        <p> number: <input value={props.newNumber} onChange={props.numberHandler}/> </p>
    </div>
    <div>
        <button type="submit">add</button>
    </div>
</form>)
}

export default AddContact