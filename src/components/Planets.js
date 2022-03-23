import React from 'react'
import './Components.sass'

const Planets = ({ data }) => {
  return (
    <div>
      {data?.map((planet, index) => (
        <div className='planets' key={index}>
          <div>Name: {planet.name}</div>
          <div>Population: {planet.population}</div>
          <div>Climate: {planet.climate}</div>
          <div>Terrain: {planet.terrain}</div>
        </div>
      ))}
    </div>
  )
}

export default Planets