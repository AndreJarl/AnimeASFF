import React from 'react'
import { Link } from 'react-router-dom';


const AnimeCard = ({anime : {title, image, id} }) => {

  return (
   <Link style={{textDecoration: 'none', color: 'white'}} to={`/animeinfo/${id}`}><div className='card-container'>
         <img className='img-card' width={150} src={image} alt="" />
        <div className='title'>
            {title} 
        </div>
    </div>
    </Link>
  );
}

export default AnimeCard;