import React from 'react'

function Filter(filter) {
    return (
        <form onSubmit={filter.filter}>
            <p> filter by: <input value={filter.new} onChange={filter.handler} /></p>
            <button type="submit">filter</button>
        </form>
    )
}

export default Filter