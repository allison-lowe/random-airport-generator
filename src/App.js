import React, { useState, useEffect } from 'react';
import './App.css';
import dice from './dice.png';
import axios from 'axios';

// const airports = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];

function App() {
  const [airport, setAirport] = useState('New York');

  async function getRandomAirport() {
    // send an HTTP request to the API endpoint
    const response = await axios.get('http://localhost:3000/api/generate-random-airport');
    console.log(response);
    // get the data from the response
    const randomAirport = response.data;
  
    // use the data in your app
    console.log(randomAirport);
  }
  // getRandomAirport();

//   // use the useEffect hook to update the city when the image is clicked
// useEffect(() => {
// // choose a random city from the list
// const newAirport = getRandomAirport();

// // update the airport state
// setAirport(newAirport);
// }, []);

const handleClick = () => {
  // choose a random city from the list
  const newAirport = getRandomAirport().then(response => response.json);

  // update the airport state
  setAirport(newAirport);
}

  return (
    <div className="App">
      <header className='App-header'>
      {/* <img src={dice} className="App-logo" onClick={() => handleClick} /> */}
        {<p onClick={handleClick}>
          {airport}
        </p>}
      </header>
    </div>
  );
}

export default App;
