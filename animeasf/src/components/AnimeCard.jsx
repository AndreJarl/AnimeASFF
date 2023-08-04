import React from 'react'
import { Link } from 'react-router-dom';


const AnimeCard = ({anime : {title, image, id} }) => {

  return (
   <Link style={{textDecoration: 'none', color: 'white'}} to={`/animeinfo/${id}`}><div className='flex flex-col items-center content-center mb-6'>
         <img className='mb-2 w-60 lg:w-40' src={image} alt="" />
        <div className='w-50 lg:w-40 lg:text-sm text-slate-400 overflow-hidden line-clamp-2'>
            {title} 
        </div>
    </div>
    </Link>
  );
}

export default AnimeCard;