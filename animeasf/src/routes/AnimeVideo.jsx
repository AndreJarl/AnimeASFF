import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimeEpisode from '../components/AnimeEpisode';

// https://api.consumet.org/anime/gogoanime/{servers}/{episodeId}

function AnimeVideo() {

   const [animeEP, setAnimeEP] = useState([]);
   const [info, setInfo]  = useState({});
   
   const {id, infos} = useParams()

    useEffect(()=>{
        fetchData();
        fetchData1();
    }, [id,infos])

    const url = `https://api.consumet.org/anime/gogoanime/servers/${id}`;
    const urll = `https://api.consumet.org/anime/gogoanime/info/${infos}`;


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
  
    const fetchData1 = async () => {
      try {
          const { dataa } = await axios.get(urll);
          setInfo(dataa)    
         
      } catch (err) {
          throw new Error(err.message);
      }
  };


  console.log(urll)
  console.log(url) 

    return (
      <>
      <Navbar/>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1em', flexDirection: 'column', alignItems: 'center'}}>
          {animeEP.map((ep) => (
           <>
           <h3>{id}</h3>
            <iframe
              key={ep.id} // Assuming 'id' is a unique identifier for each episode
              width="800"
              height="450"
              src={ep.url}
              allow="autoplay; fullscreen"
            ></iframe>
        
           </>
          ))}
          
        </div>
        {/* <AnimeEpisode info={info} />  */}
        <Footer/>
        </>
      );
    
}

export default AnimeVideo