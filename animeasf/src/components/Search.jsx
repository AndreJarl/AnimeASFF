import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import AnimeCard from './AnimeCard';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import none from '../assets/none.png'

function Search() {
 
  const {animes} = useParams();

 const url = "https://api.consumet.org/anime/gogoanime/"+ animes+ "?page={number}";
 
 const [searchAnimes, setSearchAnimes] = useState(null);
 

 useEffect(()=>{
  fetchData();
 }, [animes]);


const fetchData = async () => {
 try {
 const { data } = await axios.get(url);
 setSearchAnimes(data.results);
 console.log(searchAnimes)
 } catch (err) {
 throw new Error(err.message);
 }
};

if (searchAnimes === null) {
    return <div style={{display: 'flex', justifyContent: 'center',
     marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
  }

  const num = searchAnimes.length;

  return (
    <>
   <Navbar/>
  { searchAnimes.length > 0 ? (
    <div className='mb-10'>
      <p className=' text-center font-medium pt-48 pb-5 md:pt-36 lg:pt-36 lg:pb-5 text-2xl'>{num} top results for {animes}....</p>
    <div className=' grid grid-cols-2 gap-2 mx-4   lg:grid lg:grid-cols-5 lg:justify-center lg:gap-3 lg:mx-52' style={{marginTop: '2em'}}>
        {searchAnimes.map((anime)=>(
             <AnimeCard key={anime.id} anime={anime}/>
        ))}
    </div>
    </div>): (<div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', paddingTop: '4em', flexDirection: 'column'}}>
      <p className='text-center' style={{marginBottom: '4em'}}>No results found for {animes}</p>
      <img src={none} alt="" srcset="" width={500} />
    </div>)}
    <Footer/>
    </>
  )
}

export default Search