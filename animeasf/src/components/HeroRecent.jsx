
import React, { useEffect, useState } from 'react';
import AnimeCardRecent from './AnimeCardRecent'
import axios from "axios";
import { Link } from 'react-router-dom';
const url = "https://api.consumet.org/anime/gogoanime/recent-episodes";

function HeroRecent() {
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
        <div className='hero-recent'>
            <div className='heroRecent-container'>
              <div className='heroRecent-sub'>    
                 <h1 className='recentHero-title'>RECENT ANIMES</h1>
                 <p className='heroRecent-subtitle'>
                Latest or most recently released anime series!</p>
              </div>
              
          <Link to="/recentanimes" style={{textDecoration: 'none'}}> <button className='see-more'>See More</button></Link> 
            </div>
          {animes.length > 0 ? (
            <div className='recent-container'>
              {animes.map((anime) => (
                <AnimeCardRecent key={anime.id} anime={anime} />
              ))}
            </div>
          ) : (
            <div>No anime data available.</div>
          )}  
        </div>
         
      );
}

export default HeroRecent