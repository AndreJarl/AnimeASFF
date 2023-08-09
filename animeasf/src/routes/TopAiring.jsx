import React, { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard'
import { BsArrowRight, BsArrowLeft} from 'react-icons/BS';
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const url = "https://api.consumet.org/anime/gogoanime/top-airing";


const TopAiring = () => {
  
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
           <h1 className='text-5xl pt-48 pb-10 md:pt-36 lg:pt-36 lg:pb-10 font-bold text-center' >TOP AIRING ANIMES</h1>
        {animes.length > 0 ? (
            <div className='grid grid-cols-2 gap-2 mx-5 content-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 lg:mx-40 xl:mx-96 lg:content-center lg:gap-1'>
            {animes.map((anime) => (
              
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div>No anime data available.</div>
        )}  
         <div className='flex justify-center items-center mx-auto my-9 gap-1'>
          <button className='bg-gray-700 px-5 flex items-center gap-3 hover:bg-slate-500' onClick={MinusCount}> <BsArrowLeft />PREV PAGE</button>
          <button className='bg-gray-700 px-5  flex items-center gap-3 hover:bg-slate-500' onClick={AddCount}>NEXT PAGE <BsArrowRight /></button>
        </div>
      <Footer/>
      </div>
       
    );
  };

export default TopAiring;