import React from 'react';
import {useState, useEffect} from 'react' 
import axios from 'axios'
import Country from './components/Country'
import Info from './components/Info'

const App = () => {
    const [countries, setCountries] = useState([])
    const [group, setGroup] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        console.log('effect initiated');
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            setCountries(response.data)
        })
    },[])

    const requestData = (event) => {
        event.preventDefault();
        let copy = []

        // get matching countries
        for(var i=0; i<countries.length; i++){
            if (countries[i].name.toUpperCase().includes(filter.toUpperCase()))
                copy = copy.concat(countries[i])
        }

        // check for too many
        if (copy.length>9) {
            window.alert("Too many matches, specify another filter")
            return setFilter('')
        } else {
            setGroup(copy)
            setFilter('')
        }
    } 

    const display = (group) => {
        if(group.length >= 2) {
            return group.map((country => <Country country={country} key={country.capital}/>))
        } else if (group.length === 1) {
            return <Info country={group[0]}/>
        } else if (group.length === 0) return <p>no country found yet</p>
    }

    const handleRequest = (event) => {
        console.log(event.target.value);
        setFilter(event.target.value)
    }

    return(
        <div>
            <h3>search for country</h3>
            <form onSubmit={requestData}>
                <p>search: <input value={filter} onChange={handleRequest}/></p>
                <button type="submit">request</button>
            </form>
            <div>
                <ul>
                    {display(group)}
                </ul>
            </div>
        </div>
    )
    
}

export default App;
