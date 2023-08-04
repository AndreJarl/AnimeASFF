import React, { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard'
import axios from "axios";
import { Link } from 'react-router-dom';
const url = "https://api.consumet.org/anime/gogoanime/top-airing";


const HeroTopAiring = () => {
  
  const  [animes, setAnimes] = useState(null); 


      useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url, { params: { page: 1 } });
     const five = data.results.slice(0, 5);
    setAnimes(five);
    console.log(data);
     } catch (err) {
     throw new Error(err.message);
     }
    
    };
    
    if (animes === null) {
      return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
    }


    return (
      <div className='flex flex-col content-center items-center' >
          <div className='mt-10 flex flex-col content-center items-center mx-5 mb-5 md:flex md:flex-row md:gap-60 lg:flex lg:flex-row lg:gap-96 lg:ml-5'>
            <div className='lg:mr-11'>    
               <h1 className='text-4xl text-center font-bold'>TOP AIRING ANIMES</h1>
               <p className='text-center text-sm mt-3 lg:text-xs lg:text-left'>
                Current most popular or highly-rated anime series!</p>
            </div>
            
        <Link to="/topairing" style={{textDecoration: 'none'}}> <button className='flex text-center content-center mt-5 bg-gray-700 px-8 py-4 mb-5 rounded lg:px-5 lg:py-2 lg:text-sm'>See More</button></Link> 
          </div>
        {animes.length > 0 ? (
          <div className='grid grid-cols-2 gap-2 mx-5 content-center md:grid md:grid-cols-3 lg:flex lg:content-center lg:gap-5'>
            {animes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div>No anime data available.</div>
        )}  
      </div>
       
    );
  };

export default HeroTopAiring;