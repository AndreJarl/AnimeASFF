import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function AnimeEpisode({info}) {


if (info === null) {
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
}

  return (
    <div>
         <div className='title-container mt-20 mb-5 flex justify-center items-center gap-4 '>
             <h1 className='text-center text-5xl font-bold'>EPISODES</h1>
             <div className='h-2 bg-gray-600 lg:w-[800px] sm:w-10 md:w-96'></div>
        </div>  
     
        <div className='grid grid-cols-5 justify-center items-center gap-4 mb-10 mx-10 lg:mx-44 lg:grid-cols-12 mt-5 lg:gap-4'>
          
            {info.episodes.map((ep, index) => (
                  <Link style={{textDecoration: 'none', color: 'white'}} to={`/anime-ep/${ep.id}`}><div className=' py-2 text-sm bg-gray-600 rounded text-center lg:py-2 hover:bg-slate-500' key={ep.id}>
                    {1+index}
                  </div></Link>
              ))}
        </div>       
    </div>
  )
}

export default AnimeEpisode