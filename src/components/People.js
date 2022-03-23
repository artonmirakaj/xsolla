import React from 'react'
import './Components.sass'

const People = ({ data }) => {
  return (
    <div>
      {data?.map((person, index) => (
        <div className='people' key={index}>
          <div>Name: {person.name}</div>
          <div>Height: {person.height}</div>
          <div>Gender: {person.gender}</div>
        </div>
      ))}
    </div>
  )
}

export default People