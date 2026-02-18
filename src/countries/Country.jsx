import { useState } from 'react';
import './Country.css';

export default function Country({ country, visitedCountryHandler }) {
    var [visited, setVisited] = useState(false);

    const visitedClickHandler = () => {
        setVisited(!visited);
        visitedCountryHandler(country);
    }
  return (
    <div className={`card ${visited ? 'card-visited' : ''}`}>
        <div className='flag'>
            <img width="100" height="60" src={country.flags.png} alt={`${country.name.common} flag`}/>
        </div>
        <div className='detail'>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>

        <button onClick={visitedClickHandler}>
            {visited ? "Visited" : "Not visited"}
        </button>
    </div>
  );
}