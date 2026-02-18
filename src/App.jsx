import { Suspense } from 'react';
import Countries from './countries/Countries';
import './App.css'

var countriesPromises = fetch('https://restcountries.com/v3.1/region/asia')
  .then((response) => response.json());

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromises={countriesPromises}/>
      </Suspense>
    </div>
  )
}

export default App
