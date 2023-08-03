import React from 'react'
import { Link } from 'react-router-dom';
const AnimeCardRecent = ({anime : {title, image, episodeNumber, id} }) => {
  return (
    <Link style={{textDecoration: 'none', color: 'white'}} to={`/animeinfo/${id}`}><div className='card-container'>
         <img className='img-card' src={image} alt="" />
        <div className='title'>
            {title} 
        </div>
        <div style={{fontSize: '12px', marginLeft: '-6em', color: 'grey', marginTop: '1em'}}>Episode   {episodeNumber}</div>
    </div>
    </Link>
  );
}

export default AnimeCardRecent;