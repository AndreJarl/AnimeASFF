import React , {useState, useEffect} from 'react'
import { FcSearch } from 'react-icons/fc';
import { BsMoonFill } from 'react-icons/BS';
import { FaGithubAlt, FaUserCircle } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import axios from "axios";



function Navbar() {

 const [animes, setAnime] = useState("");


 const Search = (event) =>{
     setAnime("");
 }



  
  return (
    <div className='flex flex-col content-center items-center bg-black pb-9 lg:pb-9 lg:flex-row lg:content-center lg:mx-auto lg:gap-4 lg:h-30 lg:my-auto md:flex md:flex-row md:mx-auto md:pb-0 '>
       <div className=" flex flex-col content-center pt-8 mx-10 lg:flex-row lg:items-center lg:content-center lg:mx-auto lg:gap-10 lg:my-auto md:flex md:mx-auto">   
            
                <div className="flex content-center items-center gap-8 mb-8 lg:mb-0 lg:gap-10" >
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
                    <h2 className='cursor-pointer text-2xl hover:text-gray-600'><BsMoonFill/></h2> 
                    <a href="https://github.com/AndreJarl/AnimeASFF"><h2 className='cursor-pointer  text-2xl hover:text-gray-600'><FaGithubAlt/></h2></a> 
                    <h2 className='cursor-pointer  text-2xl hover:text-gray-600'><FaUserCircle/></h2> 
                </div>

         </div>

         <div className=' flex content-center items-center gap-4 mx-10 lg:hidden '> 
                    <input className='bg-white text-black w-40 sm:w-60 h-8 rounded py-1 px-1 ' style={{ outline: 'none'}} type="text" placeholder='search anime' value={animes}
                    onChange={(event)=> setAnime(event.target.value)}/>
                    {animes.trim() !== "" ? 
                    ( <Link to = {`/search/${animes}`} onClick={Search} ><h2 className='text-2xl bg-gray-500 px-2 py-1 rounded hover:bg-slate-800'><FcSearch /></h2></Link>)
                     : (<h2 className='text-2xl bg-gray-500 px-2 py-1 rounded hover:bg-slate-800'><FcSearch /></h2>)}
                </div>
    </div>
  )
}

export default Navbar;