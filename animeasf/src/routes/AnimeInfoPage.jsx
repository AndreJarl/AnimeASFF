import React from 'react'
import AnimeEpisode from '../components/AnimeEpisode';

const  AnimeInfoPage = ({info}) => {

  if (!info) {
    return <div style={{display: 'flex', justifyContent: 'center',
    marginTop: '10em'}}>Loading...</div>; // Show loading message while data is being fetched
  }
 
  console.log(info)

  return (
    <div className='flex flex-col justify-center pt-28'  key={info.id}>
      <div className='flex flex-col justify-center items-center mx-10 mt-10 lg:flex lg:flex-row lg:gap-8 '>
           <div className='flex justify-center'>
              <img className='w-[300px]' src={info.image} alt="" srcset="" />
           </div>
           <div className="flex flex-col ">
            <h1 className='text-2xl font-bold text-center lg:text-left'>{info.title}</h1>
            <div className='grid grid-cols-3 gap-2 lg:gap-10 text-xs justify-center my-4 lg:flex lg:justify-start'>
             
              {info.genres.map((genre)=>{
                  return(
                    <>
                       <div className=' text-gray-400 px-0 py-0text-center rounded lg:text-sm lg:bg-none'>
                        {genre}
                       </div>
                   </>   
                  )
              })}
            </div>
            <p className='text-sm lg:w-[650px] text-slate-400 mb-5'>{info.description}</p>

            <div className=''>
              <ul className='flex gap-2 text-sm text-white'>
                <li className='bg-gray-700 px-3 rounded py-1'>{info.status}</li>
                <li  className='bg-gray-700 px-3 rounded py-1'>{info.releaseDate}</li>
                <li  className='bg-gray-700 px-3 rounded py-1'>{info.subOrDub}</li>
              </ul>
            </div>
           </div>
           
      </div>

       
      <AnimeEpisode info={info}/>
        
     
    </div>
  )
}

export default AnimeInfoPage