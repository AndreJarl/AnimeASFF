import {React, useEffect, useState} from 'react'
import axios from "axios";
import AnimeInfoPage from '../routes/AnimeInfoPage';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';



function AnimeInfo() {

  const {infos} = useParams();


  const url = `https://api.consumet.org/anime/gogoanime/info/${infos}`;
  
 
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData();
    
  }, [infos]);

  const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        setInfo(data)     
      
    } catch (err) {
        throw new Error(err.message);
    }
};

if (info === null) {
  return <div style={{display: 'flex', justifyContent: 'center', marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
}

return (
  <>
  <Navbar/>
  <div>
  
    {info ? <AnimeInfoPage info={info} /> : <p>ERROR</p>}
  </div>

  <Footer/>
  </>
)
}

export default AnimeInfo;