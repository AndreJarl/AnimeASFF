import React, { useEffect, useState } from 'react';
import AnimeCardRecent from '../components/AnimeCardRecent'
import { BsArrowRight, BsArrowLeft} from 'react-icons/BS';
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const url = "https://api.consumet.org/anime/gogoanime/recent-episodes";


const RecentAnime = () => {
  
  const  [animes, setAnimes] = useState(null); 
  const [count, setCount] = useState(1);

  const AddCount = () => {
     setCount( count => count + 1)
  }

  const MinusCount = () => {
    setCount((count)=> (count > 1 ? count-1 : count))
 }


      useEffect(() => {
        fetchData();
    }, [count]);


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url, { params: { page: count } });
    setAnimes(data.results);
    console.log(data.results);
     } catch (err) {
     throw new Error(err.message);
     }
    
    };
    

    


    

    if (animes === null) {
      return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
    }


    return (

      
      <div >
           <Navbar />
          <h1 className='topAiring-title' >RECENT ANIMES</h1>
        {animes.length > 0 ? (
          <div className='container'>
            {animes.map((anime) => (
              
              <AnimeCardRecent key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div>No anime data available.</div>
        )}  
        <div className='next-button'>
      <button onClick={MinusCount}><BsArrowLeft/>PREV PAGE</button>
      <button onClick={AddCount}>NEXT PAGE<BsArrowRight/></button>
      </div>
      <Footer/>
      </div>
       
    );
  };

export default RecentAnime;