import React from 'react'
import force from '../assets/force.jpeg';

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Star Wars</h1>
      <img src={force} alt='star-wars' />
    </div>
  )
}

export default Home