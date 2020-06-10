import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [classes, setClasses] = useState({})
  const [staWars, setStaWars] = useState({})

  useEffect(() => {
    Promise.all([
      axios.get('https://www.dnd5eapi.co/api/classes'),
      axios.get('https://swapi.dev/api/people'),
      axios.get('http://localhost:8001/api/interviewers'),
    ])
    // .then(([{ data: dndRes}, { data: starWarsRes}]) => {
    .then(([ dndRes, starWarsRes, interViewRes ]) => {
      console.log('dndRes :>> ', dndRes.data);
      console.log('starWarsRes :>> ', starWarsRes.data);
      console.log('interViewRes :>> ', interViewRes.data);
      setClasses(dndRes.data)
      setStaWars(starWarsRes.data)
    })
  }, []);

  useEffect(() => {
    axios.get('/api/houses')
    .then(({ data }) => {
      console.log('data :>> ', data);
    })
  }, []);

  return (
    <div className="App">
      {classes.count}
      {
        staWars.count
      }
    </div>
  );
}

export default App;
