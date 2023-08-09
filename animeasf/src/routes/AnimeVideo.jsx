import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeEpisode from '../components/AnimeEpisode';


function AnimeVideo() {

   const [animeEP, setAnimeEP] = useState([]);
   
   const {id} = useParams()

    useEffect(()=>{
        fetchData();
    }, [id])

    const url = `https://api.consumet.org/anime/gogoanime/servers/${id}`;
   


    const fetchData = async () => {
     try {
     const { data } = await axios.get(url);
     const oneEP = data.slice(1, 2);
     setAnimeEP(oneEP)
     console.log(data)
     } catch (err) {
     throw new Error(err.message);
     }
    };
  

  console.log(url) 

    return (
      <>
      <Navbar/>
      <div className='pt-48 pb-5 lg:pt-36 lg:pb-20 xl:pb-20' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  {animeEP.map((ep) => (
    <div key={ep.id} className='flex flex-col justify-center items-center'>
      <h3 className='text-2xl mb-4 text-center'>{id}</h3>
      <div className= 'w-[300px] sm:w-[350px] h-[260px] flex justify-center items-center lg:w-[700px] lg:h-[400px]'>
        <iframe
          src={ep.url}
          allow="autoplay; fullscreen"
          className='w-full h-full'
        ></iframe>
      </div>
    </div>
  ))}
  <p className='text-center mb-5 mt-5 font-semibold'>PRO TIP: If ads in the video player persist, refresh the browser.</p>
  <p className='text-center mb-5 text-slate-400'>Apologies, but I do not possess the rights to the video content; therefore, it is inevitable that advertisements will be present. A small price to pay.</p>
</div>


       
       
        <Footer/>
        </>
      );
    
}

export default AnimeVideo