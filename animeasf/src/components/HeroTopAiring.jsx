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
      <div >
          <div className='heroTopAiring'>
            <div className='heroTopAiring-sub'>    
               <h1 className='heroTopAiring-title'>TOP AIRING ANIMES</h1>
               <p className='sub-titles'>
                Current most popular or highly-rated anime series!</p>
            </div>
            
        <Link to="/topairing" style={{textDecoration: 'none'}}> <button className='see-more'>See More</button></Link> 
          </div>
        {animes.length > 0 ? (
          <div className='topAiringContainer'>
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