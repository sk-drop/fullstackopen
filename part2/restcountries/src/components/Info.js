import React from 'react'

const Info = ({country}) => {
    return (
        <div> 
            <div>
                <br/>
                <h2>{country.name}</h2>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>           
                <h3>languages</h3>
                    <ul>
                        {country.languages.map(language => 
                        <li key={language.name}>{language.name}</li>)}
                    </ul>
                <br/>
                <img src={country.flag} alt={`flag of ${country.name}`}
                width="100%" height="100%" border="3"/>
            </div>
        </div>
    )
}

export default Info