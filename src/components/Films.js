import React from 'react'
import './Components.sass'

const Films = ({ data }) => {
  return (
    <div>
      {data?.map((film) => (
      <div className='films' key={film.episode_id}>
        <h2>{film.title}</h2>
        <p>{film.opening_crawl}</p>
      </div>
      ))}
    </div>
  )
}

export default Films