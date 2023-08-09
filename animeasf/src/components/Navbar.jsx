import React , {useState, useEffect} from 'react'
import { FcSearch } from 'react-icons/fc';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';



function Navbar() {

 const [animes, setAnime] = useState("");


 const Search = (event) =>{
     setAnime("");
 }

 const future =()=>{
    alert("This feature is currently under development.");
   }


  
  return (
    <div className=' fixed pb-9 w-full bg-black flex flex-col justify-center items-center md:flex md:flex-row md:items-center md:content-center lg:flex-row '>
       <div className=" flex flex-col items-center justify-center md:gap-8 pt-8 mx-10 lg:flex-row lg:items-center lg:content-center lg:mx-auto lg:gap-10 lg:my-auto md:flex md:flex-row md:content-center md:items-center">   
            
                <div className="flex content-center items-center gap-8 mb-8 md:mb-0 lg:mb-0 lg:gap-10" >
                <Link to="/"  style={{textDecoration: 'none', color: 'white'}}>
                  <h1 className='text-3xl font-bold md:text-4xl lg:text-4xl'>ANIMEASF</h1></Link>
                    <ul className='hidden gap-6 font-medium sm:flex'>
                      <Link to="/topairing" style={{textDecoration: 'none', color: 'white'}}>
                        <li className='hover:text-gray-600'>Trending</li>
                      </Link>
                      <Link to="/recentanimes" style={{textDecoration: 'none', color: 'white'}}>
                        <li className='hover:text-gray-600'>Recent</li>
                        </Link>
                    </ul>
                </div>

                <div className='hidden lg:flex lg:items-center border rounded-lg   '> 
                    <input className='bg-black text-white w-80 py-2 px-2 rounded-lg' style={{ outline: 'none', color: 'white'}}
                     type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2 className='lg:text-2xl px-1 cursor-pointer'>
                      <FcSearch /></h2></Link>)
                     : (<h2 className='lg:text-2xl px-1 cursor-pointer'><FcSearch /></h2>)}
                </div>

                <div className='hidden lg:flex gap-6'>
                    <a href="https://github.com/AndreJarl/AnimeASFF"><h2 className='cursor-pointer  text-2xl hover:text-gray-600'><FaGithubAlt/></h2></a> 
                    <h2 onClick={future} className='cursor-pointer  text-2xl hover:text-gray-600'><FaUserCircle/></h2> 
                </div>
             
             
         <div className=' flex content-center items-center gap-4  lg:hidden '> 
                    <input className='bg-white text-black w-40 sm:w-60 h-8 rounded py-1 px-1 ' style={{ outline: 'none'}} type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2 className='text-2xl bg-gray-500 px-2 py-1 rounded hover:bg-slate-800'><FcSearch /></h2></Link>)
                     : (<h2 className='text-2xl bg-gray-500 px-2 py-1 rounded hover:bg-slate-800'><FcSearch /></h2>)}
                </div>
         </div>

    </div>
  )
}

export default Navbar;