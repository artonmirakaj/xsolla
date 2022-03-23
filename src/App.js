import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Films from './components/Films';
import People from './components/People';
import Planets from './components/Planets';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.sass'
import Home from './components/Home';

function App() {
  const [starWars, setStarWars] = useState({
    films: [],
    people: [],
    planets: [],
  });

  useEffect(() => {
    const fetchStarWarsData = async () => {
      let resFilms = await axios.get('https://swapi.dev/api/films');
      let resPeople = await axios.get('https://swapi.dev/api/people');
      let resPlanets = await axios.get('https://swapi.dev/api/planets');

    setStarWars({
      ...starWars,
      films: resFilms.data.results,
      people: resPeople.data.results,
      planets: resPlanets.data.results,
    })
  }
    fetchStarWarsData()
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/films' element={<Films data={starWars.films} />} />
        <Route path='/people' element={<People data={starWars.people} />} />
        <Route path='/planets' element={<Planets data={starWars.planets} />} />
      </Routes>
    </div>
  );
}

export default App;