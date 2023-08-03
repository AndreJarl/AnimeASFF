import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function AnimeEpisode({info}) {


if (info === null) {
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
}

  return (
    <div>
         <div className='title-container'>
             <h1 className='ep-title'>EPISODES</h1>
             <div className='line'></div>
        </div>  
     
        <div className='episodes'>
          
            {info.episodes.map((ep, index) => (
                  <Link style={{textDecoration: 'none', color: 'white'}} to={`/anime-ep/${ep.id}`}><div className='episode-item' key={ep.id}>
                    {1+index}
                  </div></Link>
              ))}
        </div>       
    </div>
  )
}

export default AnimeEpisode