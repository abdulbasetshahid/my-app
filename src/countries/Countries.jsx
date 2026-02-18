import { use } from 'react';
import Country from './Country';
import { useState } from 'react';
import './Country.css';

export default function Countries({ countriesPromises }) {
  var countries = use(countriesPromises);
  var [visitedCountry, setVisitedCountry] = useState([]);

  const visitedCountryHandler = (country) => {
    if(visitedCountry.includes(country)) {
      const newVisitedCountry = visitedCountry.filter((c) => c !== country);
      setVisitedCountry(newVisitedCountry);
      return;
    }
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  }

  return (
    <>
        <h1>Asian Countries: {countries.length}</h1>
        <h2>Visited Counties: {visitedCountry.length}</h2>
        <div className='list'>
            {countries.map((country) => (
                <Country key={country.cca3} country={country} visitedCountryHandler={visitedCountryHandler}/>
            ))}
        </div>
    </>
  );
}4