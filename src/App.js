import React from 'react';
import CountriesWeather from "./components/CountriesWeather";
import './App.css';
import Spinner from './components/Spinner'
function App() {
  return (
    <div>
      <div className='container'>
        <Spinner/>
      {/* <CountriesWeather  /> */}
      </div>
    </div>
  );
}

export default App;
