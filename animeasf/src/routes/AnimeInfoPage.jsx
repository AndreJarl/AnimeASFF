import React from 'react'
import AnimeEpisode from '../components/AnimeEpisode';

const  AnimeInfoPage = ({info}) => {

  if (!info) {
    return <div style={{display: 'flex', justifyContent: 'center',
    marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
  }
 
  console.log(info)

  return (
    <div  key={info.id}>
      <div className='info'>
           <div className='info-img-container'>
              <img className='info-img' src={info.image} alt="" srcset="" />
           </div>
           <div className="info-description">
            <h1>{info.title}</h1>
            <div className='genre'>
             
              {info.genres.map((genre)=>{
                  return(
                    <>
                       <div className='genre-items'>
                        {genre}
                       </div>
                   </>   
                  )
              })}
            </div>
            <p className='description'>{info.description}</p>

            <div className='ratings'>
              <ul>
                <li>{info.status}</li>
                <li>{info.releaseDate}</li>
                <li>{info.subOrDub}</li>
              </ul>
            </div>
           </div>
           
      </div>

       
      <AnimeEpisode info={info}/>
        
     
    </div>
  )
}

export default AnimeInfoPage